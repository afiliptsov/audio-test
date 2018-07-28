import React, { Component, Fragment } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import MusicPlayer from "react-responsive-music-player";

class AudioTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
      playingUrl: "",
      audio: null,
      playing: false
    };
  }

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

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    audio.play();
    if (!this.state.playing) {
      {
        console.log("Playing", !this.state.playing);
        console.log("Playing", this.state.playingUrl);
      }
      audio.play();
      this.setState({
        playing: true,
        playingUrl: previewUrl,
        audio
      });
    } else {
      if (this.state.playingUrl === previewUrl) {
        audio.pause();
        this.state.audio.pause();
        this.setState({ playing: false });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({ playing: true, playingUrl: previewUrl, audio });
      }
    }
  }

  render() {
    let songsList = this.state.test;
    let mapOfSongs = songsList.map((element, i) => {
      return (
        <div key={i} onClick={() => this.playAudio(element.previewUrl)}>
          <h1>{element.trackCensoredName}</h1>
          <img src={element.artworkUrl100} alt="" />

          <div>{element.trackPrice} $</div>
          <div>{element.artistName}</div>
          {console.log("Returned elements", element)}
        </div>
      );
    });
    return (
      <Fragment>
        <div>Component got rendered</div>
        {console.log("State", this.state.test)}
        {mapOfSongs}
        {console.log(this.state.playing)}
        {console.log(this.state.playing)}
        {console.log(this.state.playing)}
      </Fragment>
    );
  }
}

export default AudioTest;
