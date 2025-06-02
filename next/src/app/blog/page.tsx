import { StrapiResponse } from "@/types/strapiBlog";
import BlogPageComponent from "./component";
import { fetchWithToken } from "@/dynamicRendering/utils";
import qs from "qs";
import { listQueryParams } from "./consts";

const fetchFromStrapi = async () => {
  const response = await fetchWithToken(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/blogs?${qs.stringify(listQueryParams)}`);
  const data = await response as StrapiResponse;
  return data;
};

export default async function BlogPage() {
  const blogs = await fetchFromStrapi();
  return <BlogPageComponent posts={blogs} />;
}
