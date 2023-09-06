import { FunctionComponent } from "react";
import { ResponsiveImageType } from "../../types.ts";
import SCPiece from "./Piece.styled.tsx";

export type PieceType = {
  name: string;
  Meta: FunctionComponent;
  image: ResponsiveImageType;
  label?: string;
};

export default function Piece({ name, Meta, image, label }: PieceType) {
  return (
    <SCPiece>
      <picture>
        <source
          srcSet={image.desktop.src}
          media={`(min-width: ${image.desktop.breakPoint}px)`}
        />
        <source
          srcSet={image.tablet.src}
          media={`(min-width: ${image.tablet.breakPoint}px)`}
        />
        <img src={image.mobile.src} alt={name} />
      </picture>
      {label && <h1 className="fs-h1">{label}</h1>}
      <div className="peace">
        <h4 className="fs-h4">{name}</h4>
        <Meta />
      </div>
    </SCPiece>
  );
}
