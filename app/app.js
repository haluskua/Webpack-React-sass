import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1> Hello Webpack with React!</h1>;
}

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
