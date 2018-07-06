import React, { Component } from "react";
import "./App.css";
import AudioTest from "./components/AudioTest";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AudioTest />
      </div>
    );
  }
}

export default App;
