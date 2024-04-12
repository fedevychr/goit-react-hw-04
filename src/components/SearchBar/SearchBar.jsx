const SearchBar = () => {
  const onSubmit = () => {};
  return (
    <header>
      <form>
        <input
          onClick={onSubmit}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
