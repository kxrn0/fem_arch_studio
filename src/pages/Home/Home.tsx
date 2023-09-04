import SCHome from "./Home.styled.tsx";
import welcome from "../../assets/image-welcome.jpg";
import { Link } from "wouter";
import IconArrow from "../../icons/IconArrow.tsx";
import smallTeam from "../../assets/home/desktop/image-small-team.jpg";
import mediumTeam from "../../assets/home/tablet/image-small-team.jpg";
import largeTeam from "../../assets/home/mobile/image-small-team.jpg";
import ImageSlider, { SliderImageType } from "./ImageSlider/ImageSlider.tsx";
import Piece from "../../components/Piece/Piece.tsx";

import paraDesktop from "../../assets/home/desktop/image-hero-paramour.jpg";
import paraTablet from "../../assets/home/tablet/image-hero-paramour.jpg";
import paraMobile from "../../assets/home/mobile/image-hero-paramour.jpg";

import seraphDesktop from "../../assets/home/desktop/image-hero-seraph.jpg";
import seraphTablet from "../../assets/home/tablet/image-hero-seraph.jpg";
import seraphMobile from "../../assets/home/mobile/image-hero-seraph.jpg";

import fedDesktop from "../../assets/home/desktop/image-hero-federal.jpg";
import fedTablet from "../../assets/home/tablet/image-hero-federal.jpg";
import fedMobile from "../../assets/home/mobile/image-hero-federal.jpg";

import trinityDesktop from "../../assets/home/desktop/image-hero-trinity.jpg";
import trinityTablet from "../../assets/home/tablet/image-hero-trinity.jpg";
import trinityMobile from "../../assets/home/mobile/image-hero-trinity.jpg";
import { useMemo } from "react";

export default function Home() {
  const widths = useMemo(
    () => ({ desktop: 1110, tablet: 573, mobile: 375 }),
    []
  );
  const sliderImages: SliderImageType[] = useMemo(
    () => [
      {
        name: "Project Paramour",
        description:
          "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
        images: {
          desktop: { src: paraDesktop, width: widths.desktop },
          tablet: { src: paraTablet, width: widths.tablet },
          mobile: { src: paraMobile, width: widths.mobile },
        },
      },
      {
        name: "Seraph Station",
        description:
          "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
        images: {
          desktop: { src: seraphDesktop, width: widths.desktop },
          tablet: { src: seraphTablet, width: widths.tablet },
          mobile: { src: seraphMobile, width: widths.mobile },
        },
      },
      {
        name: "Federal II Tower",
        description:
          "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
        images: {
          desktop: { src: fedDesktop, width: widths.desktop },
          tablet: { src: fedTablet, width: widths.tablet },
          mobile: { src: fedMobile, width: widths.mobile },
        },
      },
      {
        name: "Trinity Bank Tower",
        description:
          "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
        images: {
          desktop: { src: trinityDesktop, width: widths.desktop },
          tablet: { src: trinityTablet, width: widths.tablet },
          mobile: { src: trinityMobile, width: widths.mobile },
        },
      },
    ],
    []
  );

  return (
    <SCHome>
      <ImageSlider images={sliderImages} />
      <header className="hero">
        <h1>Welcome</h1>
        <div className="welcome">
          <img src={welcome} alt="welcome" />
          <h3>Welcome to Arch Studio</h3>
          <div className="paragraphs">
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
      </header>
      <section className="about-link">
        <h3>Small team, big ideas</h3>
        <Link to="/fem_arch_studio/about">
          <p>About Us</p>
          <IconArrow />
        </Link>
      </section>
      <section className="featured">
        <div className="header">
          <h3>Featured</h3>
          <Link to="/fem_arch_studio/portfolio">
            <p>See All</p>
            <IconArrow />
          </Link>
        </div>
        <div className="featured-projects">
          <Piece />
        </div>
      </section>
    </SCHome>
  );
}
