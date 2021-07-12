import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink, useHistory } from "react-router-dom";
import "./LoginForm.css";

function LoginForm({setShowModal}) {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  //   if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.userLogin({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemoLogin = () => {
    return dispatch(sessionActions.userLogin({ credential: "demouser", password: "password" }))
  }

  const toSignUp = () => {
    history.push("/signup")
    setShowModal(false)
  }

  return (
    <div className="login-container">
      <div id="login-title">Log in</div>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="login-input-div">
          <label>
            <input
              type="text"
              placeholder="Username or Email"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="login-input-div">
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button id="login-btn" type="submit">
          Log In
        </button>
        <div className="account-signup-text">Don't have an account? <span onClick={toSignUp} className="signup-link">Sign up</span></div>
        <div className="demo-container">Or continue as a <span onClick={handleDemoLogin} className="span-demo">demo user</span>.</div>
      </form>
    </div>
  );
}

export default LoginForm;
