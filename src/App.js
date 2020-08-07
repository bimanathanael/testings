import React from "react";
import "./styles.css";
import Home from "./fileLuqman";

export default function App() {
  function punyaFatur() {
    return (
      <>
        <h2>Start editing to see some magic happen!</h2>
        <Home />
      </>
    );
  }

  const getMyName = () => {
    const name = "herlian";

    return (
      <>
        <h3>{name.repeat(100)}</h3>
      </>
    );
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {getMyName()}
      <h1> ini dari luqman </h1>
      <h1> ini dari luqman </h1>
      {punyaFatur()}
      <p> ini p dari bima </p>
      <h1> heheheeheheh </h1>
    </div>
  );
}
