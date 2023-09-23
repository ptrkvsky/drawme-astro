import { SanityImage } from "./SanityImage";

export interface SiteSettings {
  title: string;
  description: string;
  keywords: string[];
  imageSN: SanityImage;
}
