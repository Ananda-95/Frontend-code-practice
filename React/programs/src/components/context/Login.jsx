
import { useState, useContext } from "react";
import UserContext from "./UserContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(UserContext);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "123") {
      login(username);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🔐</div>

        <h2>Welcome Back!</h2>
        <p className="login-subtitle">
          Please sign in to continue
        </p>

        <div className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="login-button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>

        <p className="login-footer">
          Secure Login Portal
        </p>
      </div>
    </div>
  );
};

export default Login;