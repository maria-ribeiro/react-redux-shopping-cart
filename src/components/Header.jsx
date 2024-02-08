import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import CartButton from "./CartButton";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header>
      <nav className="header-nav">
        <h1>Redux Shopping App</h1>
        <ul className="header-ul">
          <li>
            <CartButton />
          </li>
          <li>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
