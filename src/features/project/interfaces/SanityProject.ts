import { SanityImage } from '@interfaces/SanityImage';

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
  quore: {
    _key: string;
    text: string;
    image: SanityImage;
  }[];
  typographie: SanityImage;
}
