import React from "react";
import Splash from "./Splash";
import About from "./About";
import Projects from "./Projects";
import Feed from "./Feed";
import Contact from "./Contact";
import Navigation from "../Navigation";
import useSticky from "../util/useSticky";

function Homepage(props) {
  

  return (
    <section className="homepage">
      <Splash />
      <About bucket={props.bucket} />
      <Projects bucket={props.bucket} />
      <Feed bucket={props.bucket} />
      <Contact bucket={props.bucket} />
    </section>
  );
}

export default Homepage;
