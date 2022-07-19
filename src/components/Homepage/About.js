import React, { Fragment, useEffect, useState } from "react";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

function About(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObject({
        slug: "about",
        props: "title,metadata",
      })
      .then((data) => {
        updateData(data.object);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const meta = data?.metadata;
  const title = data?.title;
  const profilePic =
    "https://imgix.cosmicjs.com/1c8757a0-e259-11ea-ad85-b3e5c5f45697-seattleprofilepic.circle.png";

  return data ? (
    <Fragment>
      <section className="about flex" id="homepage-about">
        <div className="section-title-container flex">
          <h2 className="section-title">{title}</h2>
          <div className="header-underline" />
        </div>
        <div className="content flex-row">
          <AboutMe descr={meta.description_lines} img={profilePic} />
          {/* <Skills bucket={props.bucket} /> */}
        </div>
      </section>
    </Fragment>
  ) : (
    <div />
  );
}

export default About;
