import "./AdminLogin.css";
import React from "react";

function AdminLogin() {
  return (
    <div
      style={{
        background: "#00000075",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="admin-login-container">
        <div className="ad-l-box">
          <div className="ad-l-item">
            <span>Email</span>
            <input type="email" name="email" />
          </div>
          <div className="ad-l-item">
            <span>Password</span>
            <input type="password" name="password" />
          </div>
          <div className="ad-l-item">
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
