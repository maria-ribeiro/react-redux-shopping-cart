import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login());
  };

  return (
    <div className="auth">
      <div className="auth-card">
        <h2>Login</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label" htmlFor="username">
            Username
          </label>
          <input
            className="auth-input"
            type="text"
            name="username"
            id="username"
          />
          <label className="auth-label" htmlFor="password">
            Password
          </label>
          <input
            className="auth-input"
            type="password"
            name="password"
            id="password"
          />
          <button className="button login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
