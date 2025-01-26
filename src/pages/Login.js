import React, { useState, useEffect, useRef } from "react";

const Login = ({ onAuthenticated }) => {
  const inputRef = useRef(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    inputRef.current.focus(); // Automatically focus the input on component mount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();

      if (result.authenticated) {
        onAuthenticated(); // Trigger the callback to authenticate
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Error authenticating:", err);
      setError(true);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3 className="login-label">Enter Password</h3>
        <input
          className="login-input"
          type="password"
          value={password}
          ref={inputRef}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">Login</button>
      </form>
      {error && <p>Incorrect password, please try again.</p>}
    </div>
  );
};

export default Login;
