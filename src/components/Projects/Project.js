import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { formatProjectTools } from "../util/Formatting";

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

  console.log(data);

  if(!data) {
    return <div />
  }

  const { title } = data;
  const { date, description, gallery, link, splash, tools } = data.metadata;

  return (
    <div className="project-container" onClick={(e) => e.stopPropagation()}>
      <div className="project flex-even">
        <div className="project-gallery"></div>
        <div className="title-container">
          <div className="title">{title}</div>
          <div className="tools">{formatProjectTools(tools)}</div>
        </div>
        <div className="description">{description}</div>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <div className="visit-site-container">Visit Site</div>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
