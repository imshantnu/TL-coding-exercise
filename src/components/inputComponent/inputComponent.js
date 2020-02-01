import React from "react";

const InputComponent = ({ onKeyUp, ...rest }) => {
  return <input type="text" onKeyUp={e => onKeyUp(e)} {...rest} />;
};

export default InputComponent;
