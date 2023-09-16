import React from "react";

// eslint-disable-next-line react/prop-types
function Error({ message, children, className }) {
  return (
    <div className={className}>
      <p>{message}</p>
      {children}
    </div>
  );
}

export default Error;
