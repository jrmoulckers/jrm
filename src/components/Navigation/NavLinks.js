import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

export default function NavLinks(props) {
  return (
    <Fragment>
      <Link
        to={{ pathname: "/", hash: "#home" }}
        activeclass="focus"
        spy="true"
        smooth="true"
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Home</div>
      </Link>
      <Link
        to={{ pathname: "/", hash: "#about" }}
        activeclass="focus"
        spy="true"
        smooth="true"
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">About</div>
      </Link>
      {/* <Link
            to="/#skills"
            activeclass="focus"
            spy="true"
            smooth="true"
            duration={500}
            offset={-50}
            onClick={props.onClick}
          >
            <div className="nav-link no-select">Skills</div>
          </Link> */}
      <Link
        to={{ pathname: "/", hash: "#projects" }}
        activeclass="focus"
        spy="true"
        smooth="true"
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Projects</div>
      </Link>
      <Link
        to={{ pathname: "/", hash: "#feed" }}
        activeclass="focus"
        spy="true"
        smooth="true"
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Feed</div>
      </Link>
      <Link
        to={{ pathname: "/", hash: "#contact" }}
        activeclass="focus"
        spy="true"
        smooth="true"
        duration={500}
        onClick={props.onClick}
      >
        <div className="nav-link no-select">Contact</div>
      </Link>
    </Fragment>
  );
}
