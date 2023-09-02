export interface SanityImage {
  alt;
  asset: {
    altText: string;
    url: string;
    metadata: {
      dimensions: {
        height: number;
        width: number;
        aspectRatio: number;
      };
    };
  };
}
