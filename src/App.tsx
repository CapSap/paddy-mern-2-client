import React from "react";
import ReactDOM from "react-dom";

import Entry from "./components/Entry";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Entry />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
