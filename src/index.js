import React from "react";
import ReactDOM from "react-dom";
import SmartMonkeyComponent from "./Components/SmartMonkeyComponent";

import "./styles.css";

function App() {
  return <SmartMonkeyComponent />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
