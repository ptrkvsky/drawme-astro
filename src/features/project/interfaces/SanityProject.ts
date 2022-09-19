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
  mainColor: string;
  color1: SanityImage;
  color2: SanityImage;
  color3: SanityImage;
  hue: string;
  saturation: string;
  mainImages: SanityImage[];
  excerptRaw: any[];
  quote: Quote[];
  typographie: SanityImage;
  imagesFooter: SanityImage[];
}
