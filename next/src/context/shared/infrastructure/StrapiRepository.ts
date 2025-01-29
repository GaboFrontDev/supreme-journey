import CONFIG from '@/config';
import { StrapiPluralResponseEntity } from '../domain/StrapiPluralResponseEntity';
import { StrapiSingleItemResponseEntity } from '../domain/StrapiSingleItemResponseEntity';
import { strapiRequest } from './utils/request';

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export class StrapiRepository<T> {
  protected endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  protected async withRetry(
    url: string,
    retries = 0
  ): Promise<StrapiPluralResponseEntity<T>> {
    const res = await strapiRequest(url);
    if (retries > CONFIG.MAX_RETRIES) {
      throw new Error(
        `${new Date()}: Query to ${this.endpoint} failed, exceeded max retries`
      );
    }
    if (!res.ok) {
      console.log(`${new Date()}: Query to ${this.endpoint} failed, ${res.statusText}`)
      await delay(500);
      return this.withRetry(url, retries + 1);
    }
    const data = await res.text();
    if (!data.length) {
      await delay(500);
      return this.withRetry(url, retries + 1);
    }
    const values = JSON.parse(data);
    return values as StrapiPluralResponseEntity<T>;
  }

  protected async get(query = ''): Promise<StrapiPluralResponseEntity<T>> {
    const values = await this.withRetry(`${this.endpoint}s${query}`);
    return values;
  }

  protected async getSingleItem(
    query: string
  ): Promise<StrapiSingleItemResponseEntity<T>> {
    if (!query) {
      throw new Error(`Missing required query param`);
    }
    const res = await strapiRequest(`${this.endpoint}s${query}`);
    if (!res.ok) {
      throw new Error(
        `${new Date()}: Query to ${this.endpoint}${query} failed`
      );
    }
    return (await res.json()) as Promise<StrapiSingleItemResponseEntity<T>>;
  }

  protected async getItem(
    query: string
  ): Promise<StrapiSingleItemResponseEntity<T>> {
    if (!query) {
      throw new Error(`Missing required query param`);
    }
    const res = await strapiRequest(`${this.endpoint}${query}`);
    if (!res.ok) {
      throw new Error(
        `${new Date()}: Query to ${
          this.endpoint
        }${query} failed. err: ${res.statusText}`
      );
    }
    return (await res.json()) as Promise<StrapiSingleItemResponseEntity<T>>;
  }

  protected async getByQuery(
    query: string
  ): Promise<StrapiPluralResponseEntity<T>> {
    if (!query) {
      throw new Error(`${new Date()}: Missing required query param`);
    }
    const res = await strapiRequest(`${this.endpoint}s?${query}`);
    if (!res.ok) {
      throw new Error(
        `${new Date()}: Query ${query} to ${this.endpoint} failed`
      );
    }
    return (await res.json()) as StrapiPluralResponseEntity<T>;
  }

  protected async create(
    payload: string
  ): Promise<StrapiSingleItemResponseEntity<T>> {
    if (!payload) {
      throw new Error(`Missing required payload param`);
    }
    const res = await strapiRequest(`${this.endpoint}s`, 'POST', payload);
    if (!res.ok) {
      console.log(res.statusText);

      throw new Error(`${new Date()}: Create failed`);
    }
    return (await res.json()) as StrapiSingleItemResponseEntity<T>;
  }

  protected async update(
    payload: string,
    id: string
  ): Promise<StrapiSingleItemResponseEntity<T>> {
    if (!payload || !id) {
      throw new Error(
        `Missing required payload or id param, values: ${payload} ${id}`
      );
    }
    const res = await strapiRequest(`${this.endpoint}s/${id}`, 'PUT', payload);
    if (!res.ok) {
      throw new Error(
        `${new Date()}: Update failed with message ${res.statusText}`
      );
    }
    return (await res.json()) as StrapiSingleItemResponseEntity<T>;
  }
}
