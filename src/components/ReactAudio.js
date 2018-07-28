import React, { Component, Fragment } from "react";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

class ReactAudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
      value: 10
    };
  }
  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };
  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  componentDidMount() {
    axios
      .get(
        "https://itunes.apple.com/search?term=jack+johnson&limit=20&primaryGenreName=Rock"
      )
      .then(res =>
        this.setState(
          {
            test: res.data.results
          },
          console.log("response", res)
        )
      );
  }

  render() {
    let songsList = this.state.test;
    let mapOfSongs = songsList.map((element, i) => {
      return (
        <div key={i}>
          <h1>{element.trackCensoredName}</h1>
          <img src={element.artworkUrl100} alt="" />

          <ReactAudioPlayer
            src={element.previewUrl}
            controls={true}
            onPlay={console.log("Paused")}
            onPause={() => {
              console.log("Paused");
            }}
            style={{ width: "100%" }}
            volume={this.state.value / 100}
          />

          <button>Play</button>
          <audio controls loop>
            <source type="audio/mpeg" src={element.previewUrl} />
          </audio>

          <div>{element.trackPrice} $</div>
          <div>{element.artistName}</div>
          {console.log("Returned elements", element)}
        </div>
      );
    });
    const { value } = this.state;
    return (
      <Fragment>
        <div>Component got rendered</div>
        {console.log("State", this.state.test)}
        {mapOfSongs}
        <div className="slider">
          <Slider
            min={0}
            max={100}
            value={this.state.value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          <div className="value">{this.state.value}</div>
        </div>
      </Fragment>
    );
  }
}

export default ReactAudio;
