import React from "react";


import WithoutArrow from "./components/withoutArrow";
import WithHooks from "./components/withHooks";
import WithArrow from "./components/withArrow";
import WithReduxAndArrow from './components/withReduxAndArrow';

import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <WithoutArrow titulo="Sem Arrow function"></WithoutArrow>
      <WithArrow></WithArrow>
      <WithHooks></WithHooks>
      <WithReduxAndArrow></WithReduxAndArrow>
    </Provider>
  );
}

export default App;
