export type Person = {
  name: string;
  image: string;
  position: string;
  link: {
    Instagram: string;
    Facebook: string;
    LinkedIn: string;
  };
  description: string[];
  role?: string;
};