import { SanityImage } from '@interfaces/SanityImage';

export interface SanityWhoAmI {
  titlePart1: string;
  titlePart2: string;
  intro: string;
  presentationRaw: any[];
  presentationMobile1Raw: any[];
  presentationMobile2Raw: any[];
  portrait: SanityImage;
}
