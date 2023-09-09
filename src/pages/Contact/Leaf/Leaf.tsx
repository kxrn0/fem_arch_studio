import { useEffect, useMemo } from "react";
import L from "leaflet";
import icon from "../../../assets/icons/marker-icon.svg";
import SCLeaf from "./Leaf.styled.tsx";
import "leaflet/dist/leaflet.css";

type CoordinateType = [lat: number, long: number];

type LocationType = { name: string; coordinates: CoordinateType };

export type LeafType = {
  view?: CoordinateType;
  locations?: LocationType[];
  zoom?: { default: number; max: number };
};

export default function Leaf({
  view = [51.505, -0.09],
  locations = [{ name: "ロンドン", coordinates: [51.5, -0.09] }],
  zoom = { default: 13, max: 20 },
}: LeafType) {
  const mapId = useMemo(() => crypto.randomUUID(), []);

  useEffect(() => {
    const map = L.map(mapId).setView(view, zoom?.default);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: zoom.max,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    locations.forEach((location) =>
      L.marker(location.coordinates, {
        icon: L.icon({ iconUrl: icon, iconAnchor: [20, 0] }),
      })
        .addTo(map)
        .bindPopup(location.name)
    );

    return () => {
      map.remove();
    };
  }, []);

  return <SCLeaf id={mapId} className="map">map</SCLeaf>;
}
