import React from "react";

function SkillBar(props) {
  return (
    <div className="skill-bar-container flex-row">
      <div className="title bar flex">{props.title}</div>
      <div className="percentage-container flex-row">
        <div
          className="percentage bar"
          style={{ width: `${props.progress}%` }}
        />
        <div className="value" style={{ width: `${100 - props.progress}%` }}>
          {props.progress}%
        </div>
      </div>

      {/* <p className="progress">{props.progress}%</p>
      <p className="description">{props.description}</p> */}
    </div>
  );
}

export default SkillBar;
