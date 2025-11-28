import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle"></div>
          <div className="logo-text">Portfolio</div>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-text">
          <span className="typing-text">Loading amazing experience...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
