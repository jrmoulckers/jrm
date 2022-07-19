import React from "react";
import { connect } from "react-redux";

const ModalConductor = (props) => {
  return props.currentModal;
};

export default ((state) => state, () => actions)(ModalConductor);
