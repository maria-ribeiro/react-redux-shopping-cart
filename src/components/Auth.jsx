import "./Auth.css";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-card">
        <h2>Login</h2>
        <form className="auth-form" htmlFor="email">
          <label className="auth-label" htmlFor="email">
            Email
          </label>
          <input className="auth-input" type="email" name="email" id="email" />
          <label className="auth-label" htmlFor="password">
            Password
          </label>
          <input
            className="auth-input"
            type="password"
            name="password"
            id="password"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
