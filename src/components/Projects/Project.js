import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { formatProjectTools } from "../util/Formatting";
import Slider from "react-slick";

function Project(props) {
  const [data, updateData] = useState(null);
  let history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    if (data) {
      return;
    }

    props.bucket
      .getObjects({
        query: {
          type: "projects",
          slug: id,
        },
        props: "title,metadata",
      })
      .then((d) => {
        if (d?.objects && d.objects.length > 0) {
          updateData(d.objects[0]);
        } else {
          history.push({ pathname: "/" });
        }
      })
      .catch((error) => {
        console.log(error);
        history.push({ pathname: "/" });
      });
  }, []);

  if (!data) {
    return <div />;
  }

  const { title } = data;
  const { date, description, gallery, link, splash, summary, tools } =
    data.metadata;

  return (
    <div className="project-container" onClick={(e) => e.stopPropagation()}>
      <div className="project flex">
        <div className="title-container">
          <h1 className="title">{title}</h1>
          <h3 className="tools">{formatProjectTools(tools)}</h3>
        </div>
        <p className="summary">{summary}</p>
        <p className="description">{description}</p>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <div className="visit-site-container">Visit Site</div>
          </a>
        ) : null}
        <div className="project-gallery flex">
          {gallery.map((i) => (
            <div>
              <img src={i} className="project-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
