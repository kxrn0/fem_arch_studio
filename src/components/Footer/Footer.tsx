import { Link } from "wouter";
import Logo from "../../icons/Logo.tsx";
import SCFooter from "./Footer.styled.tsx";
import IconArrow from "../../icons/IconArrow.tsx";

export default function Footer() {
  return (
    <SCFooter>
      <div className="container">
        <div className="logo">
          <Link to="/fem_arch_studio/">
            <span>
              <Logo />
            </span>
          </Link>
        </div>
        <div className="links">
          <Link to="/fem_arch_studio/portfolio" className="fs-body-1">
            Portfolio
          </Link>
          <Link to="/fem_arch_studio/about" className="fs-body-1">
            About Us
          </Link>
          <Link to="/fem_arch_studio/contact" className="fs-body-1">
            Contact
          </Link>
        </div>
      </div>
      <Link to="/fem_arch_studio/portfolio" className="button-primary">
        <p>See Our Portfolio</p>
        <IconArrow />
      </Link>
    </SCFooter>
  );
}
