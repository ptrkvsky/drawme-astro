export interface SanityImage {
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
