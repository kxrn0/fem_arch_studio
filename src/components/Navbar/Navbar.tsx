import { useLocation, Link } from "wouter";
import Logo from "../../icons/Logo.tsx";
import SCNavbar from "./Navbar.styled.tsx";
import { useEffect, useMemo, useState } from "react";
import IconMenu from "../../icons/IconMenu.tsx";
import IconClose from "../../icons/IconClose.tsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPage = useMemo(() => {
    const path = location[0].split("/")[2];

    switch (path) {
      case "":
        return "home";
      case "portfolio":
      case "contact":
        return path;
      case "about":
        return "about us";
      default:
        return "not found";
    }
  }, [location]);
  const links = useMemo(
    () => [
      {
        to: "/fem_arch_studio/portfolio",
        text: "Portfolio",
        name: "portfolio",
      },
      { to: "/fem_arch_studio/about", text: "About Us", name: "about us" },
      { to: "/fem_arch_studio/contact", text: "Contact", name: "contact" },
    ],
    []
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location[0]]);

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "";

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <SCNavbar>
      <Link to="/fem_arch_studio/">
        <span>
          <Logo />
        </span>
      </Link>
      <div
        className={`backdrop ${isOpen && "active"}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="page" tabIndex={0}>
        <div className="line"></div>
        <p className="fs-body-2">{currentPage}</p>
      </div>
      <label className="navbar-toggle">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        {isOpen ? <IconClose /> : <IconMenu />}
      </label>
      <div className={`links ${isOpen ? "open" : "closed"}`}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`fs-body-1 ${
              currentPage === link.name ? "current-page" : ""
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </SCNavbar>
  );
}
