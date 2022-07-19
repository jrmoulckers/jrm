import React, { useEffect, useState } from "react";
import Splash from "./Splash";
import About from "./About";
import Projects from "./Projects";
import Feed from "./Feed";
import Contact from "./Contact";
import Navigation from "../Navigation";
import useSticky from "../util/useSticky";

function Homepage(props) {
  const { isSticky, element } = useSticky();

  return (
    <section className="homepage">
      <Splash />
      <Navigation sticky={isSticky} element={element} />
      <About bucket={props.bucket} />
      <Projects bucket={props.bucket} />
      <Feed bucket={props.bucket} />
      <Contact bucket={props.bucket} />
    </section>
  );
}

export default Homepage;
