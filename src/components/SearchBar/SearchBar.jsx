import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

toast.error("Please, enter the text");

const SearchBar = ({ searchPhotos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = value.trim();
    if (!query.length) {
      toast.error("Please, enter your query");
    }

    searchPhotos(query);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">
          <FiSearch size="16px" />
        </button>
        <Toaster position="bottom-center" />
      </form>
    </header>
  );
};

export default SearchBar;
