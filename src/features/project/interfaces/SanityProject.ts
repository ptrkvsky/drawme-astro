import { SanityImage } from '@interfaces/SanityImage';

export interface Quote {
  text: string;
  image: SanityImage;
}

export interface SanityProject {
  _id: string;
  slug: {
    current: string;
  };
  drawMeA: string;
  color1: string;
  color2: string;
  color3: string;
  mainImages: SanityImage[];
  excerptRaw: any[];
  quote: Quote[];
  typographie: SanityImage;
  imagesFooter: SanityImage[];
}
