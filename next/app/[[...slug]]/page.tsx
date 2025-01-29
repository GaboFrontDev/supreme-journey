import { dynamicStaticParams } from "@/dynamicRendering/dynamicStaticParams";
import DynamicPage from "@/dynamicRendering/pages/DynamicPage";

export async function generateStaticParams() {
  return dynamicStaticParams();
}

export default async function Page({ params }: IPageProps) {
  return DynamicPage({
    params,
  });
}
