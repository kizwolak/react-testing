import User from "./components/User";
import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Input handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
}
