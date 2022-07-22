import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Fragment } from "react/cjs/react.production.min";

export default function NavLinks(props) {
  return (
    <Fragment>
      <Link
        to="/#home"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Home</div>
      </Link>
      <Link
        to="/#about"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">About</div>
      </Link>
      {/* <Link
            to="/#skills"
            activeClass="focus"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            onClick={props.onClick}
          >
            <div className="nav-link no-select">Skills</div>
          </Link> */}
      <Link
        to="/#projects"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Projects</div>
      </Link>
      <Link
        to="/#feed"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Feed</div>
      </Link>
      <Link
        to="/#contact"
        activeClass="focus"
        spy={true}
        smooth={true}
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Contact</div>
      </Link>
    </Fragment>
  );
}
