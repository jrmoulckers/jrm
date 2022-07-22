import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import BackToTop from "../misc/BackToTop";
import NavLinks from "./NavLinks";
import scrollToTop from "../util/scrollToTop";

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
      <NavLinks onClick={() => toggleMenu(false)} />
      <a
        onClick={() => {
          scrollToTop();
          toggleMenu(false);
        }}
      >
        <BackToTop visible />
      </a>
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
