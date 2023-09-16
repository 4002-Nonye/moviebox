/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Button.module.css";

function Button({ children, btnType, text, className, onClick }) {
  return (
    <button
      className={`${styles.btn} ${styles[btnType]} ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
      <p>{text}</p>
    </button>
  );
}

export default Button;
