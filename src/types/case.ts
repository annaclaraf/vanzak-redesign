export interface Case {
  slug: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  website?: string;
  services: string[];
  images: string[];
}