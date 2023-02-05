import { SiteSettings } from '@interfaces/SiteSettings';

interface Home {
  title: string;
  introPresentationRaw: any[];
  introPresentationMobileRaw: any[];
  introDetail: string;
}

export interface SanityHome {
  SiteSettings: SiteSettings[];
  Home: Home;
}
