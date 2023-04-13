import { useState } from "react";

import "./Login.css";

function Login() {
  return (
    <form className="login-form">
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input type="email" />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" />
      </label>
      <button className="btn">Login</button>
    </form>
  );
}
export default Login;
