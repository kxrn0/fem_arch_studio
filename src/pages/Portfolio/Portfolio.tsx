import { useMemo } from "react";
import SCPortfolio from "./Portfolio.styled.tsx";
import Piece, { PieceType } from "../../components/Piece/Piece.tsx";

import image_seraph_desktop from "../../assets/portfolio/desktop/image-seraph.jpg";
import image_seraph_tablet from "../../assets/portfolio/tablet/image-seraph.jpg";
import image_seraph_mobile from "../../assets/portfolio/mobile/image-seraph.jpg";

import image_eebox_desktop from "../../assets/portfolio/desktop/image-eebox.jpg";
import image_eebox_tablet from "../../assets/portfolio/tablet/image-eebox.jpg";
import image_eebox_mobile from "../../assets/portfolio/mobile/image-eebox.jpg";

import image_fed_desktop from "../../assets/portfolio/desktop/image-federal.jpg";
import image_fed_tablet from "../../assets/portfolio/tablet/image-federal.jpg";
import image_fed_mobile from "../../assets/portfolio/mobile/image-federal.jpg";

import image_del_sol_desktop from "../../assets/portfolio/desktop/image-del-sol.jpg";
import image_del_sol_tablet from "../../assets/portfolio/tablet/image-del-sol.jpg";
import image_del_sol_mobile from "../../assets/portfolio/mobile/image-del-sol.jpg";

import image_proto_desktop from "../../assets/portfolio/desktop/image-prototype.jpg";
import image_proto_tablet from "../../assets/portfolio/tablet/image-prototype.jpg";
import image_proto_mobile from "../../assets/portfolio/mobile/image-prototype.jpg";

import image_228b_desktop from "../../assets/portfolio/desktop/image-228b.jpg";
import image_228b_tablet from "../../assets/portfolio/tablet/image-228b.jpg";
import image_228b_mobile from "../../assets/portfolio/mobile/image-228b.jpg";

import image_edelweiss_desktop from "../../assets/portfolio/desktop/image-edelweiss.jpg";
import image_edelweiss_tablet from "../../assets/portfolio/tablet/image-edelweiss.jpg";
import image_edelweiss_mobile from "../../assets/portfolio/mobile/image-edelweiss.jpg";

import image_netcry_desktop from "../../assets/portfolio/desktop/image-netcry.jpg";
import image_netcry_tablet from "../../assets/portfolio/tablet/image-netcry.jpg";
import image_netcry_mobile from "../../assets/portfolio/mobile/image-netcry.jpg";

import image_hyper_desktop from "../../assets/portfolio/desktop/image-hypers.jpg";
import image_hyper_tablet from "../../assets/portfolio/tablet/image-hypers.jpg";
import image_hyper_mobile from "../../assets/portfolio/mobile/image-hypers.jpg";

import image_sxiv_desktop from "../../assets/portfolio/desktop/image-sxiv.jpg";
import image_sxiv_tablet from "../../assets/portfolio/tablet/image-sxiv.jpg";
import image_sxiv_mobile from "../../assets/portfolio/mobile/image-sxiv.jpg";

import image_trinity_desktop from "../../assets/portfolio/desktop/image-trinity.jpg";
import image_trinity_tablet from "../../assets/portfolio/tablet/image-trinity.jpg";
import image_trinity_mobile from "../../assets/portfolio/mobile/image-trinity.jpg";

import image_paramour_desktop from "../../assets/portfolio/desktop/image-paramour.jpg";
import image_paramour_tablet from "../../assets/portfolio/tablet/image-paramour.jpg";
import image_paramour_mobile from "../../assets/portfolio/mobile/image-paramour.jpg";

export default function Portfolio() {
  const pieceBreakpoints = useMemo(
    () => ({ desktop: 1200, tablet: 650, mobile: 500 }),
    []
  );
  const pieces: PieceType[] = useMemo(
    () => [
      {
        name: "Seraph Station",
        Meta: () => <p>September 2019</p>,
        image: {
          desktop: {
            src: image_seraph_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_seraph_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_seraph_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Eebox Building",
        Meta: () => <p>August 2017</p>,
        image: {
          desktop: {
            src: image_eebox_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_eebox_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_eebox_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Federal II Tower",
        Meta: () => <p>March 2017</p>,
        image: {
          desktop: {
            src: image_fed_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_fed_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_fed_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Project Del Sol",
        Meta: () => <p>January 2016</p>,
        image: {
          desktop: {
            src: image_del_sol_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_del_sol_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_del_sol_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Le Prototype",
        Meta: () => <p>October 2015</p>,
        image: {
          desktop: {
            src: image_proto_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_proto_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_proto_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "228B Tower",
        Meta: () => <p>April 2015</p>,
        image: {
          desktop: {
            src: image_228b_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_228b_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_228b_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Grand Edelweiss Hotel",
        Meta: () => <p>December 2013</p>,
        image: {
          desktop: {
            src: image_edelweiss_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_edelweiss_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_edelweiss_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Netcry Tower",
        Meta: () => <p>August 2012</p>,
        image: {
          desktop: {
            src: image_netcry_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_netcry_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_netcry_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Hypers",
        Meta: () => <p>January 2012</p>,
        image: {
          desktop: {
            src: image_hyper_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_hyper_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_hyper_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "SXIV Tower",
        Meta: () => <p>March 2011</p>,
        image: {
          desktop: {
            src: image_sxiv_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_sxiv_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_sxiv_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Trinity Bank Tower",
        Meta: () => <p>September 2010</p>,
        image: {
          desktop: {
            src: image_trinity_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_trinity_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_trinity_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
      {
        name: "Project Paramour",
        Meta: () => <p>February 2008</p>,
        image: {
          desktop: {
            src: image_paramour_desktop,
            breakPoint: pieceBreakpoints.desktop,
          },
          tablet: {
            src: image_paramour_tablet,
            breakPoint: pieceBreakpoints.tablet,
          },
          mobile: {
            src: image_paramour_mobile,
            breakPoint: pieceBreakpoints.mobile,
          },
        },
      },
    ],
    []
  );

  return (
    <SCPortfolio>
      {pieces.map((piece, index) => (
        <Piece key={index} {...piece} />
      ))}
    </SCPortfolio>
  );
}
