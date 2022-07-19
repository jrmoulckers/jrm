import React, { Fragment } from "react";
import { formatProjectTools } from "../util/Formatting";
import { MdClose } from "react-icons/md";

const NUM_VISIBLE_PROJECTS = 18;

function ProjectModal(props) {
  const { title, tools, img, source, blurb, description, progress } = props;
  console.log(tools);
  return props.active ? (
    <div
      className="project-container-background flex"
      onClick={() => props.setActive(false)}
    >
      <div
        className="project-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-navbar">
          <MdClose
            className="modal-close"
            onClick={() => props.setActive(false)}
          />
        </div>
        <div className="project flex-even">
          <div className="project-gallery"></div>
          <div className="title-container">
            <div className="title">{title}</div>
            <div className="tools">{formatProjectTools(tools)}</div>
          </div>
          <div className="description">{description}</div>
          <a href={source} target="_blank">
            <div className="visit-site-container button">Visit Site</div>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <Fragment />
  );
}

export default ProjectModal;
