import "./Signup.css";

import useSignup from "../../hooks/useSignup";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { signup, isPending, error } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, confirm);
    signup(email, password);
  }
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Confirm Password:</span>
        <input
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
        />
      </label>

      {!isPending && <button className="btn">Submit</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
export default Signup;
