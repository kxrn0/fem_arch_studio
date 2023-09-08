import { FunctionComponent, useEffect, useState } from "react";
import SCProfile from "./Profile.styled.tsx";

type Social = {
  link: string;
  Icon: FunctionComponent;
};

export type ProfileType = {
  name: string;
  id: string;
  position: string;
  image: string;
  socials: Social[];
};

export default function Profile({
  name,
  id,
  position,
  image,
  socials,
}: ProfileType) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handle_click(event: globalThis.MouseEvent) {
      const target = event.target as HTMLElement;

      if (!target.classList.contains(`profile-image-${id}`)) setIsOpen(false);
    }

    window.addEventListener("click", handle_click);

    return () => window.removeEventListener("click", handle_click);
  }, []);

  return (
    <SCProfile>
      <div className="socials">
        <img
          src={image}
          alt={name}
          className={`profile-image-${id}`}
          onClick={() => setIsOpen(true)}
        />
        <div className={`links ${isOpen && "open"}`}>
          {socials.map(({ link, Icon }, index) => (
            <a key={index} href={link} target="_blank">
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className="info">
        <h4 className="fs-h4">{name}</h4>
        <p className="fs-body-1">{position}</p>
      </div>
    </SCProfile>
  );
}
