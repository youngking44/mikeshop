const Search = () => {
  return (
    <form className="hidden md:flex item-center">
      <input
        type="text"
        placeholder="Search"
        className="w-40 lg:w-72 p-2 border-none"
      />
      <button
        type="submit"
        className="px-5 border-none text-white bg-accent-500 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
