interface ISlugParamType {
  slug: string[];
}

interface IPageProps {
  params: ISlugParamType;
}

interface LocaleItem {
  code: string;
  lang: string;
}
