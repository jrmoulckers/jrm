import React from "react";
import { Link } from "react-router-dom";
import BackToTop from "../misc/BackToTop";
import scrollToTop from "../util/scrollToTop";
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
        <a onClick={scrollToTop}>
          <BackToTop visible={props.sticky} clear />
        </a>
      </section>
    </div>
  );
}
