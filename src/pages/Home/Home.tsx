import SCHome from "./Home.styled.tsx";
import welcome from "../../assets/image-welcome.jpg";
import { Link } from "wouter";
import IconArrow from "../../icons/IconArrow.tsx";
import largeTeam from "../../assets/home/desktop/image-small-team.jpg";
import mediumTeam from "../../assets/home/tablet/image-small-team.jpg";
import smallTeam from "../../assets/home/mobile/image-small-team.jpg";
import ImageSlider, { SliderImageType } from "./ImageSlider/ImageSlider.tsx";
import Piece, { PieceType } from "../../components/Piece/Piece.tsx";

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
import { ResponsiveImageType } from "../../types.ts";

import image_del_sol_desktop from "../../assets/portfolio/desktop/image-del-sol.jpg";
import image_228b_desktop from "../../assets/portfolio/desktop/image-228b.jpg";
import image_prototype_desktop from "../../assets/portfolio/desktop/image-prototype.jpg";

import image_del_sol_tablet from "../../assets/portfolio/tablet/image-del-sol.jpg";
import image_228b_tablet from "../../assets/portfolio/tablet/image-228b.jpg";
import image_prototype_tablet from "../../assets/portfolio/tablet/image-prototype.jpg";

import image_del_sol_mobile from "../../assets/portfolio/mobile/image-del-sol.jpg";
import image_228b_mobile from "../../assets/portfolio/mobile/image-228b.jpg";
import image_prototype_mobile from "../../assets/portfolio/mobile/image-prototype.jpg";

export default function Home() {
  const sliderWidths = useMemo(
    () => ({ desktop: 1300, tablet: 730, mobile: 500 }),
    []
  );
  const sliderImages: SliderImageType[] = useMemo(
    () => [
      {
        name: "Project Paramour",
        id: 0,
        description:
          "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
        image: {
          desktop: {
            src: paraDesktop,
            breakPoint: sliderWidths.desktop,
          },
          tablet: {
            src: paraTablet,
            breakPoint: sliderWidths.tablet,
          },
          mobile: {
            src: paraMobile,
            breakPoint: sliderWidths.mobile,
          },
        },
      },
      {
        name: "Seraph Station",
        id: 1,
        description:
          "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
        image: {
          desktop: {
            src: seraphDesktop,
            breakPoint: sliderWidths.desktop,
          },
          tablet: {
            src: seraphTablet,
            breakPoint: sliderWidths.tablet,
          },
          mobile: {
            src: seraphMobile,
            breakPoint: sliderWidths.mobile,
          },
        },
      },
      {
        name: "Federal II Tower",
        id: 2,
        description:
          "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
        image: {
          desktop: {
            src: fedDesktop,
            breakPoint: sliderWidths.desktop,
          },
          tablet: {
            src: fedTablet,
            breakPoint: sliderWidths.tablet,
          },
          mobile: {
            src: fedMobile,
            breakPoint: sliderWidths.mobile,
          },
        },
      },
      {
        name: "Trinity Bank Tower",
        id: 3,
        description:
          "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
        image: {
          desktop: {
            src: trinityDesktop,
            breakPoint: sliderWidths.desktop,
          },
          tablet: {
            src: trinityTablet,
            breakPoint: sliderWidths.tablet,
          },
          mobile: {
            src: trinityMobile,
            breakPoint: sliderWidths.mobile,
          },
        },
      },
    ],
    []
  );
  const smallWidths = useMemo(
    () => ({ desktop: 1200, tablet: 600, mobile: 500 }),
    []
  );
  const smallResponse: ResponsiveImageType = useMemo(
    () => ({
      desktop: { src: largeTeam, breakPoint: smallWidths.desktop },
      tablet: { src: mediumTeam, breakPoint: smallWidths.tablet },
      mobile: { src: smallTeam, breakPoint: smallWidths.mobile },
    }),
    []
  );
  const pieceWidths = useMemo(
    () => ({ desktop: 1200, tablet: 650, mobile: 500 }),
    []
  );
  const PieceMeta = () => (
    <Link to="/fem_arch_studio/portfolio" className="fs-body-1">
      View All Projects
    </Link>
  );
  const pieceData: PieceType[] = useMemo(
    () => [
      {
        name: "Project Del Sol",
        Meta: PieceMeta,
        image: {
          desktop: {
            src: image_del_sol_desktop,
            breakPoint: pieceWidths.desktop,
          },
          tablet: { src: image_del_sol_tablet, breakPoint: pieceWidths.tablet },
          mobile: { src: image_del_sol_mobile, breakPoint: pieceWidths.mobile },
        },
        label: "1",
      },
      {
        name: "228B Tower",
        Meta: PieceMeta,
        image: {
          desktop: { src: image_228b_desktop, breakPoint: pieceWidths.desktop },
          tablet: { src: image_228b_tablet, breakPoint: pieceWidths.tablet },
          mobile: { src: image_228b_mobile, breakPoint: pieceWidths.mobile },
        },
        label: "2",
      },
      {
        name: "Le Prototype",
        Meta: PieceMeta,
        image: {
          desktop: {
            src: image_prototype_desktop,
            breakPoint: pieceWidths.desktop,
          },
          tablet: {
            src: image_prototype_tablet,
            breakPoint: pieceWidths.tablet,
          },
          mobile: {
            src: image_prototype_mobile,
            breakPoint: pieceWidths.mobile,
          },
        },
        label: "3",
      },
    ],
    []
  );

  return (
    <SCHome>
      <ImageSlider images={sliderImages} />
      <header className="hero">
        <h1 className="fs-h1 scaled">Welcome</h1>
        <div className="welcome">
          <div className="message">
            <h3 className="fs-h3 scaled">Welcome to Arch Studio</h3>
            <div className="paragraphs">
              <p className="fs-body-1">
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </p>
              <p className="fs-body-1">
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </p>
              <p className="fs-body-1">
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </p>
            </div>
          </div>
          <img src={welcome} alt="welcome" />
        </div>
      </header>
      <section className="small-section">
        <picture>
          <source
            srcSet={smallResponse.desktop.src}
            media={`(min-width: ${smallResponse.desktop.breakPoint}px)`}
          />
          <source
            srcSet={smallResponse.tablet.src}
            media={`(min-width: ${smallResponse.tablet.breakPoint}px)`}
          />
          <img src={smallResponse.mobile.src} alt="small team, big dreams" />
        </picture>
        <div className="team-container">
          <h3 className="fs-h3 scaled">Small team, big ideas</h3>
          <Link to="/fem_arch_studio/about" className="button-primary">
            <p>About Us</p>
            <IconArrow />
          </Link>
        </div>
      </section>
      <section className="featured">
        <h3 className="fs-h3 scaled">Featured</h3>
        <Link to="/fem_arch_studio/portfolio" className="button-primary">
          <p>See All</p>
          <IconArrow />
        </Link>
        <div className="featured-projects">
          {pieceData.map((piece, index) => (
            <Piece key={index} {...piece} />
          ))}
        </div>
      </section>
    </SCHome>
  );
}
