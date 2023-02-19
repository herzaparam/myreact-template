import React from "react";

function Button({ onClick, children, ...restProps }) {
  return (
    <button onClick={onClick} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
