import React from "react";

export default function ModalWrapper(props) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      props.hideModal();
    }
  };

  return (
    <div className="modal-wrapper flex" onClick={handleBackgroundClick}>
      {/* TODO: Add standard (and possibly alterable) modal settings */}
      {props.children}
    </div>
  );
}
