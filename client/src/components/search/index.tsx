const Search = () => {
  return (
    <form className="flex item-center">
      <input
        type="text"
        placeholder="Search"
        className="w-72 p-2 border-none"
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
