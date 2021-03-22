import React from "react";

import "./App.css";
import Name from "./components/Name";
import About from "./components/About";
import More from "./components/More";

function App() {
  return (
    <div className="App">
      <main>
        <Name />
        <About />
        <More />
      </main>
    </div>
  );
}

export default App;
