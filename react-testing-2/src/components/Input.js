import React from "react";

export default function Input(props) {
  const { handleChange, inputValue } = props;
  return <input onChange={handleChange} value={inputValue} />;
}
