import SCContact from "./Contact.styled.tsx";
import Leaf, { LeafType } from "./Leaf/Leaf.tsx";

export default function Contact() {
  const leafData: LeafType = {
    view: [33.68284818307771, -91.93148658616731],
    locations: [
      {
        name: "3399 Wines Lane TX",
        coordinates: [32.80561681923585, -92.76578051447],
      },
      {
        name: "1892 Chenoweth Drive TN",
        coordinates: [33.697984939994704, -87.82089742568108],
      },
    ],
    zoom: { default: 5.5, max: 20 },
  };

  return (
    <SCContact>
      <Leaf {...leafData} />
    </SCContact>
  );
}
