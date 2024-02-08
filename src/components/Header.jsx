import "./Header.css";

const Header = () => {
  const items = 2;
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h1>Redux Shopping App</h1>
          </li>
          <li>
            <h3>Cart: {items} items</h3>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
