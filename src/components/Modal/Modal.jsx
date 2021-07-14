import css from "./Modal.module.css";
function Modal() {
  return (
    <div>
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
