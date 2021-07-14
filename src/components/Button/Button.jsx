import css from "./Button.module.css";

function Button() {
  return (
    <div>
      <button type="button" className={css.Button}>
        Load more...
      </button>
    </div>
  );
}

export default Button;

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });
