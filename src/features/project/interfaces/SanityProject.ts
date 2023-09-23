import { SanityImage } from "@interfaces/SanityImage";

export interface Quote {
  text: string;
  image: SanityImage;
}

export interface SanityProject {
  _id: string;
  title: string;
  color1: SanityImage;
  color2: SanityImage;
  color3: SanityImage;
  positionMainImageMobile?: string;
  mainImageMobile: SanityImage;
  colorExcerpt?: {
    hex: string;
  };
  startedAt: string;
  drawMeA: string;
  excerptRaw: any[];
  hue: string;
  tagline: string;
  imagesDecale?: SanityImage[];
  imagesFooter?: SanityImage[];
  thumbnails?: SanityImage[];
  imageWebsite: SanityImage;
  mainColor: {
    hex: string;
  };
  mainImages?: SanityImage[] | null;
  quote: Quote[];
  saturation: string;
  slug: {
    current: string;
  };
  typographie: SanityImage;
  imageSN?: SanityImage;
}
