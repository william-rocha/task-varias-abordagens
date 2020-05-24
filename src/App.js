import React from "react";


import WithoutArrow from "./components/withoutArrow";
import WithHooks from "./components/withHooks";
import WithArrow from "./components/withArrow";

function App() {
  return (
    <div>
      <WithoutArrow titulo="Sem Arrow function"></WithoutArrow>
      <WithArrow></WithArrow>
      <WithHooks></WithHooks>
    </div>
  );
}

export default App;
