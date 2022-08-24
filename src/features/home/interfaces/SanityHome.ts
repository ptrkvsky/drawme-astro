import { SiteSettings } from '@interfaces/SiteSettings';

interface Home {
  title: string;
  introPresentation: string;
  introDetail: string;
}

export interface SanityHome {
  SiteSettings: SiteSettings[];
  Home: Home;
}
