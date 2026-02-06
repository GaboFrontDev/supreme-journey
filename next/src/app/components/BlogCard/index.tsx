import BlogCardComponent from './BlogCardComponent';
interface BlogCardProps {
  images: string[];
  date: string;
  title: string;
  slug: string;
  buttonLabel?: string;
}

export default function BlogCard(props: BlogCardProps) {
  return <BlogCardComponent {...props} />;
}