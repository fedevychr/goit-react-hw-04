import css from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ searchPhotos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = value.trim();
    if (!query.length) {
      toast.error("Please, enter your query");
      return;
    }

    searchPhotos(query);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className={css.search}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
        <button className={css.button} type="submit">
          <FiSearch size="16px" />
        </button>
        <Toaster position="bottom-center" />
      </form>
    </header>
  );
};

export default SearchBar;
