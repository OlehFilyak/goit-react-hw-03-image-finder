import css from "./Searchbar.module.css";
function Searchbar({ children }) {
  return (
    <div>
      <header className={css.Searchbar}>{children}</header>
    </div>
  );
}

export default Searchbar;
