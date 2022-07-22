import React, { Fragment } from "react";
import { HashLink as Link } from "react-router-hash-link";
import BackToTop from "../misc/BackToTop";
import NavLinks from "./NavLinks";

export default function NavMenu(props) {
  if (props.redirects) {
    // ({ redirect links } = props.redirects);
  }

  const links = <NavLinks />;
  return (
    <div className="navigation-container" ref={props.element}>
      <section
        className={`flex ${
          props.sticky ? "navigation-sticky navigation" : "navigation"
        }`}
      >
        <div className="navigation-links-container">{links}</div>
        <Link
          to="/#home"
          activeClass="focus"
          spy={true}
          smooth={true}
          duration={800}
        >
          <BackToTop visible={props.sticky} clear />
        </Link>
      </section>
    </div>
  );
}
