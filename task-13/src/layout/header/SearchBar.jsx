const SearchBar = () => {
  return (
    <div className="search-input flex flex-row w-[320px] rounded-lg bg-[#E2E8F0]">
      <i className="ri-search-line  text-[#718096] font-bold p-3"></i>
      <input
        type="text"
        name="search"
        placeholder="Discover news, articles and more..."
        className="bg-[#E2E8F0] w-full rounded-lg outline-none py-3 placeholder:text-[#718096] font-light text-[16px]"
      />
    </div>
  );
};

export default SearchBar;
