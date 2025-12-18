// components/ErrorLog.jsx
import React from "react";
import "./ErrorLog.css"; // optional styling

const ErrorLog = ({ title, message, buttonText, image,  }) => {
  return (
    <div className="log">
      <div className="log1">
        <p>{title}</p>
      </div>

      <div className="log2">
        <div className="img">
          <img src={image} alt="error" />
        </div>

        <div className="turning">
          <p>{message}</p>
          <div className="end">
            <button >{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorLog;
