import "./Header.css";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h1>Redux Shopping App</h1>
          </li>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
