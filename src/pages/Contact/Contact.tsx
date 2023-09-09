import { useMemo } from "react";
import Hero, { HeroType } from "../../components/Hero/Hero.tsx";
import SCContact from "./Contact.styled.tsx";
import Leaf, { LeafType } from "./Leaf/Leaf.tsx";
import image_hero_desktop from "../../assets/contact/desktop/image-hero.jpg";
import image_hero_tablet from "../../assets/contact/tablet/image-hero.jpg";
import image_hero_mobile from "../../assets/contact/mobile/image-hero.jpg";
import Location, { LocationType } from "./Location/Location.tsx";
import Form from "./Form/Form.tsx";

export default function Contact() {
  const heroData: HeroType = useMemo(
    () => ({
      title: "Contact",
      name: "Tell us about your project",
      description:
        "We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
      image: {
        desktop: { src: image_hero_desktop, breakPoint: 1300 },
        tablet: { src: image_hero_tablet, breakPoint: 700 },
        mobile: { src: image_hero_mobile, breakPoint: 500 },
      },
    }),
    []
  );
  const leafData: LeafType = {
    view: [32.80951985602686, -89.84420262426548],
    locations: [
      {
        name: "3399 Wines Lane TX",
        coordinates: [31.95201634301256, -93.33685873266401],
      },
      {
        name: "1892 Chenoweth Drive TN",
        coordinates: [34.55691698307455, -85.36584523153775],
      },
    ],
    zoom: { default: 5.5, max: 20 },
  };
  const contactInfo: LocationType[] = useMemo(
    () => [
      {
        name: "Main Office",
        mail: "archone@mail.com",
        address: "1892 Chenoweth Drive TN",
        phone: "123-456-3451",
        mapUrl: "https://youtu.be/2yzIvKd-sUw?si=-6M2kXLu5dxgCGFF",
      },
      {
        name: "Office II",
        mail: "	archtwo@mail.com",
        address: "3399 Wines Lane TX",
        phone: "	832-123-4321",
        mapUrl: "https://www.youtube.com/watch?v=Xrf0zdpCDv0",
      },
    ],
    []
  );

  return (
    <SCContact>
      <Hero {...heroData} />
      <section className="contact-details">
        <h3 className="fs-h3 scaled">Contact Details</h3>
        <div className="container">
          {contactInfo.map((info, index) => (
            <Location key={index} {...info} />
          ))}
        </div>
      </section>
      <Leaf {...leafData} />
      <section className="form-section">
        <h3 className="fs-h3 scaled">Connect with us</h3>
        <Form />
      </section>
    </SCContact>
  );
}
