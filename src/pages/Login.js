import React, { useState } from "react";

const Login = ({ onAuthenticated }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>Incorrect password, please try again.</p>}
    </div>
  );
};

export default Login;
