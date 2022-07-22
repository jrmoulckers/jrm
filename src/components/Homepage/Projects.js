import React, { useEffect, useState } from "react";
import Pulse from "react-reveal/Pulse";
import { Fragment } from "react/cjs/react.production.min";
import ProjectThumbnail from "../misc/ProjectThumbnail";

const NUM_VISIBLE_PROJECTS = 18;

function Projects(props) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        query: {
          type: "projects",
        },
        props: "id,slug,title,metadata",
      })
      .then((data) => {
        updateData(data.objects);
        console.log(data.objects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.bucket]);

  const title = "Projects";
  return (
    <section className="projects flex" id="projects">
      {data ? (
        <Fragment>
          <div className="section-title-container flex">
            <h2 className="section-title">{title}</h2>
            <div className="header-underline" />
          </div>
          {/* <Fade> */}
          <div className="content">
            <div className="project-list grid">
              {data?.slice(0, NUM_VISIBLE_PROJECTS).map((d, idx) => (
                <Pulse key={d.slug}>
                  <ProjectThumbnail
                    id={d.id}
                    title={d.title}
                    tools={d.metadata.tools}
                    img={d.metadata.splash?.imgix_url}
                    description={d.metadata.description}
                    blurb={d.metadata.blurb}
                    slug={d.slug}
                    key={d.slug}
                  />
                </Pulse>
              ))}
            </div>
          </div>
          <div className="github-calendar">
            <img
              src="http://ghchart.rshah.org/jrmoulckers"
              alt="jrmoulckers' Github chart"
            />
          </div>
          {/* </Fade> */}
        </Fragment>
      ) : (
        <div />
      )}
    </section>
  );
}

export default Projects;
