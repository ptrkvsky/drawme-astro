import { SanityImage } from '@interfaces/SanityImage';

export interface Quote {
  text: string;
  image: SanityImage;
}

export interface SanityProject {
  _id: string;
  color1: SanityImage;
  color2: SanityImage;
  color3: SanityImage;
  colorExcerpt?: {
    hex: string;
  };
  drawMeA: string;
  excerptRaw: any[];
  hue: string;
  imagesDecale?: SanityImage[];
  imagesFooter?: SanityImage[];
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
}
