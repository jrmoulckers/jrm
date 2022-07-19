import React from "react";
import Fade from "react-reveal/Fade";

function FeedItem(props) {
  const slug = props.data.slug;
  const title = props.data.title;
  const d = props.data.metadata;

  return d ? (
    <Fade right>
      <div className="feed-item" key={slug}>
        <img className="feed-item-image" src={d.images[0]} alt="Feed Item" />
        <div className="feed-item-info flex">
          <div className="feed-item-title-container">
            <div className="title">{title}</div>
            <h3 className="source-type">{d.source_type}</h3>
          </div>
          <div className="description">{d.description}</div>
          <a href={d.source} target="_blank" rel="noreferrer">
            <button className="see-more">
              <div className="text">See More</div>
            </button>
          </a>
        </div>
      </div>
    </Fade>
  ) : (
    <div />
  );
}

export default FeedItem;
