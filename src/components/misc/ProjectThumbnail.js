import React, { Fragment, useState } from "react";
import { formatProjectTools } from "../util/Formatting";
import ProjectModal from "../modals/ProjectModal";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function ProjectThumbnail(props) {
  const [isModalActive, updateModalActive] = useState(false);

  let history = useHistory();

  const { id, slug, title, tools, img, blurb, description, progress } = props;

  return (
    <Fragment>
      <div
        className="project-thumbnail-container"
        // onClick={() => updateModalActive(true)}
      >
        <img className="project-image" src={img} alt="Project" />
        <div className="project-info flex">
          <div className="project-title-container">
            <div className="title">{title}</div>
            <div className="tools">{formatProjectTools(tools)}</div>
          </div>
          <div className="blurb">{blurb}</div>
          <Link to={`/projects/${slug}`}>
            <button className="see-more">
              <div className="text">See More</div>
            </button>
          </Link>
          {/* <p className="progress">{progress}%</p>
      <p className="description">{description}</p> */}
        </div>
      </div>
      <ProjectModal
        setActive={updateModalActive}
        active={isModalActive}
        title={title}
        tools={tools}
        img={img}
        // source={source}
        blurb={blurb}
        description={description}
        progress={progress}
      />
    </Fragment>
  );
}

export default ProjectThumbnail;
