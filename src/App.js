import React, { Component } from "react";
import "./App.css";
import ReactAudio from "./components/ReactAudio";
import AudioTest from "./components/AudioTest";
import axios from "axios";
import CustomMusicPlayer from "./components/CustomMusicPlayer";

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
