import SCAbout from "./About.styled.tsx";
import hero_desktop from "../../assets/about/desktop/image-hero.jpg";
import hero_tablet from "../../assets/about/tablet/image-hero.jpg";
import hero_mobile from "../../assets/about/mobile/image-hero.jpg";
import Hero, { HeroType } from "../../components/Hero/Hero.tsx";
import heritage from "../../assets/about/desktop/image-heritage.jpg";
import jake from "../../assets/about/avatars/avatar-jake.jpg";
import thompson from "../../assets/about/avatars/avatar-thompson.jpg";
import jackson from "../../assets/about/avatars/avatar-jackson.jpg";
import maria from "../../assets/about/avatars/avatar-maria.jpg";
import { useMemo } from "react";
import Profile, { ProfileType } from "./Profile/Profile.tsx";
import IconTwitter from "../../icons/IconTwitter.tsx";
import IconLinked from "../../icons/IconLinked.tsx";

export default function About() {
  const heroData: HeroType = useMemo(
    () => ({
      title: "About",
      name: "Your team of professionals",
      description:
        "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
      image: {
        desktop: { src: hero_desktop, breakPoint: 1300 },
        tablet: { src: hero_tablet, breakPoint: 700 },
        mobile: { src: hero_mobile, breakPoint: 500 },
      },
    }),
    []
  );
  const profiles: ProfileType[] = useMemo(
    () => [
      {
        name: "Jake Richards",
        id: "0",
        position: "Chief Architect",
        image: jake,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=zIGjUCkD93o",
            Icon: IconTwitter,
          },
          {
            link: "https://www.youtube.com/watch?v=rgW4B0ZVRZA",
            Icon: IconLinked,
          },
        ],
      },

      {
        name: "Thompson Smith",
        id: "1",
        position: "Head of Finance",
        image: thompson,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=jk9NLUyYEpw",
            Icon: IconTwitter,
          },
          {
            link: "https://www.youtube.com/watch?v=7h7bnYA1LXE",
            Icon: IconLinked,
          },
        ],
      },
      {
        name: "Jackson Rourke",
        id: "2",
        position: "Lead Designer",
        image: jackson,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=KGAAhzreGWw",
            Icon: IconTwitter,
          },
          {
            link: "https://www.youtube.com/watch?v=SDyWjxrEQ3U",
            Icon: IconLinked,
          },
        ],
      },
      {
        name: "Maria Simpson",
        id: "3",
        position: "Senior Architect",
        image: maria,
        socials: [
          {
            link: "https://www.youtube.com/watch?v=r1Fx-4E43BU",
            Icon: IconTwitter,
          },
          {
            link: "https://www.youtube.com/watch?v=e9rjifWJJro",
            Icon: IconLinked,
          },
        ],
      },
    ],
    []
  );

  return (
    <SCAbout>
      <Hero {...heroData} />
      <section className="heritage">
        <div className="history">
          <h3 className="fs-h3 scaled">Our Heritage</h3>
          <div className="paragraphs">
            <p className="fs-body-1">
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </p>
            <p className="fs-body-1">
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </p>
            <p className="fs-body-1">
              Our small team of world-class professionals provides input on
              every project.
            </p>
          </div>
        </div>
        <img src={heritage} alt="heritage" />
      </section>
      <section className="leaders">
        <h3 className="fs-h3 scaled">The Leaders</h3>
        <div className="profiles">
          {profiles.map((profile, index) => (
            <Profile key={index} {...profile} />
          ))}
        </div>
      </section>
    </SCAbout>
  );
}
