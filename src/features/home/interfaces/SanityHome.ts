import { SiteSettings } from '@interfaces/SiteSettings';

interface Home {
  title: string;
  introPresentationRaw: any[];
  introDetail: string;
}

export interface SanityHome {
  SiteSettings: SiteSettings[];
  Home: Home;
}
