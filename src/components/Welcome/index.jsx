import { useState } from "react";
import "./index.css";

const Welcome = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <div className="welcome-container">
      <h1 className="heading">Hi, user Welcome to IBIX</h1>
      <button className="auth-btn">Login</button>
      <button className="auth-btn">Logout</button>
    </div>
  );
};

export default Welcome;
