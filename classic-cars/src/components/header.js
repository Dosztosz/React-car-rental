import logo from "../logo.svg";

function Header() {
  const data = [
    { name: "Main Page" },
    { name: "Rent" },
    { name: "About" },
    { name: "Contact" },
  ];
  const listItems = data.map((d) => (
    <li key={d.name}>
      <a href={d.name}>{d.name}</a>
    </li>
  ));

  return (
    <div className="header">
      <img src={logo} alt="logo" width="100px" />
      <nav>
        <ul className="flex-list">{listItems}</ul>
      </nav>
    </div>
  );
}
export default Header;
