import css from "./SearchForm.module.css";

function SearchForm() {
  return (
    <div>
      <form className={css.SearchForm}>
        <input
          className={css.SearchFormInput}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
