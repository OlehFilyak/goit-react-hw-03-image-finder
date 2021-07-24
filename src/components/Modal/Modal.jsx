import { useEffect } from "react";
import PropTypes from "prop-types";

import css from "./Modal.module.css";

function Modal({ selectedImg, tags, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.addEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      <div className={css.Overlay} onClick={handleBackdropClick}>
        <div className={css.Modal}>
          <img src={selectedImg} alt={tags} />
        </div>
      </div>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
  selectedImage: PropTypes.string.isRequired,
};
