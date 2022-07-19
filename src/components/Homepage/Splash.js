import React from "react";
import { MdArrowDownward } from "react-icons/md";
import { Link } from "react-scroll";

function Splash(props) {
  return (
    <section className="splash flex" id="homepage-splash">
      <div className="content flex">
        <h1 className="welcome-message">
          My name is <span>Jeffrey Moulckers</span>
        </h1>
        <div style={{ textAlign: "center" }}>
          <Link
            to="homepage-about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="view-my-work flex">
              <button id="more-about-me">More about me</button>
              <div className="splash-arrow">
                <MdArrowDownward id="splash-arrow"/>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Splash;
