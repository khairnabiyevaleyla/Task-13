import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MenuItems from "./MenuItems";
const Header = () => {
  const menuElements = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <header className="py-5">
      <div className="container">
        <div className="grid grid-cols-3 items-center justify-align">
          <Logo />
          <SearchBar />
          <MenuItems items={menuElements} />
        </div>
      </div>
    </header>
  );
};

export default Header;
