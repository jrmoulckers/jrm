import React from "react";
import Fade from "react-reveal/Fade";
import { getLineDelineated } from "../util/CosmicFunctions.js";

function AboutMe(props) {
  return props.descr ? (
    <section className="skills about-me flex" id="homepage-about-me">
      <Fade left>
        <div className="profile-pic-container flex">
          <img src={props.img} className="profile-pic" />
        </div>
        <div className="message">{getLineDelineated(props.descr)}</div>
      </Fade>
    </section>
  ) : (
    <div />
  );
}
export default AboutMe;
