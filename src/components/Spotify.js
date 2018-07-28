//api.spotify.com/v1/tracks/6DRGwsUFQrNerxRexK7KMB",

https: import React, { Component, Fragment } from "react";
import axios from "axios";

class SpotifyTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testSpotify: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://itunes.apple.com/search?term=jack+johnson&limit=20&primaryGenreName=Rock"
      )
      .then(res =>
        this.setState({
          testSpotify: res.data.results
        })
      );
  }

  render() {
    let songsList = this.state.testSpotify;
    let mapOfSongs = songsList.map((element, i) => {
      return (
        <div key={i}>
          <h1>{element.trackCensoredName}</h1>
          <img src={element.artworkUrl100} alt="" />

          <audio controls loop>
            <source type="audio/mpeg" src={element.previewUrl} />
          </audio>

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
      </Fragment>
    );
  }
}

export default SpotifyTest;
