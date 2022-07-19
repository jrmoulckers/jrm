import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { slide as Menu } from "react-burger-menu";
import BackToTop from "../misc/BackToTop";

export default function BurgerMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const toggleMenu = (isOpen) => {
    setMenuOpen(isOpen);
  };

  if (props.redirects) {
    // ({ redirect links } = props.redirects);
  }

  const links = (
    <section className="flex burger-menu-links">
      <Link
        to="homepage-splash"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => toggleMenu(false)}
      >
        <div className="nav-link">Home</div>
      </Link>
      <Link
        to="homepage-about"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => toggleMenu(false)}
      >
        <div className="nav-link">About</div>
      </Link>
      {/* <Link
            to="homepage-skills"
            activeClass="focus"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
          >
            <div className="nav-link">Skills</div>
          </Link> */}
      <Link
        to="homepage-projects"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => toggleMenu(false)}
      >
        <div className="nav-link">Projects</div>
      </Link>
      <Link
        to="homepage-feed"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => toggleMenu(false)}
      >
        <div className="nav-link">Feed</div>
      </Link>
      <Link
        to="homepage-contact"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => toggleMenu(false)}
      >
        <div className="nav-link">Contact</div>
      </Link>
      <Link
        to="homepage-splash"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={800}
        onClick={() => toggleMenu(false)}
      >
        <BackToTop visible/>
      </Link>
    </section>
  );

  return (
    <div className="burger-menu">
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={(state) => toggleMenu(state.isOpen)}
      >
        {links}
      </Menu>
    </div>
  );
}
