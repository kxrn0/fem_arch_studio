import IconArrow from "../../../icons/IconArrow.tsx";
import SCLocation from "./Location.styled.tsx";

export type LocationType = {
  name: string;
  mail: string;
  address: string;
  phone: string;
  mapUrl: string;
};

export default function Location({
  name,
  mail,
  address,
  phone,
  mapUrl,
}: LocationType) {
  return (
    <SCLocation>
      <div className="info">
        <p className="fs-body-3">{name}</p>
        <div className="details">
          <p className="fs-body-1">Mail: {mail}</p>
          <p className="fs-body-1">Address: {address}</p>
          <p className="fs-body-1">Phone: {phone}</p>
        </div>
      </div>
      <a href={mapUrl} target="_blank">
        <p>View on Map</p>
        <IconArrow />
      </a>
    </SCLocation>
  );
}
