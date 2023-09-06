export type ImageType = {
  src: string;
  width: number;
};

export type ResponsiveImageType = {
  desktop: { src: string; breakPoint: number };
  tablet: { src: string; breakPoint: number };
  mobile: { src: string; breakPoint: number };
};
