import React, { Component } from "react";
import Home from "./pages/Home.js";
import Work from "./pages/Work.js";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Work />
      </div>
    );
  }
}

export default App;
