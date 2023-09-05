import { useLocation, Link } from "wouter";
import Logo from "../../icons/Logo.tsx";
import SCNavbar from "./Navbar.styled.tsx";
import { useMemo } from "react";

export default function Navbar() {
  const location = useLocation();
  const currentPath = useMemo(() => {
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

  return (
    <SCNavbar>
      <Link to="/fem_arch_studio/">
        <span>
          <Logo />
        </span>
      </Link>
      <div className="path" tabIndex={0}>
        <div className="line"></div>
        <p className="fs-body-2">{currentPath}</p>
      </div>
      <input type="checkbox" className="navbar-toggle" />
      <div className="links">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`fs-body-1 ${
              currentPath === link.name ? "current-page" : ""
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </SCNavbar>
  );
}
