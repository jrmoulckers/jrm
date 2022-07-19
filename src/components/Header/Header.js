import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../misc/SocialMedia";

function Header() {
  return (
    <div className="global-header">
      <Link to="/" className="header-desktop">
        <h3 className="header-desktop">Jeffrey Moulckers</h3>
      </Link>
      <h3 className="header-mobile">Jeffrey Moulckers</h3>
      <SocialMedia />
    </div>
  );
}

export default Header;
