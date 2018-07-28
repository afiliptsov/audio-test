var SpotifyWebApi = require("spotify-web-api-node");

/**
 * This example retrives an access token using the Client Credentials Flow. It's well documented here:
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

/*
 * https://developer.spotify.com/spotify-web-api/using-scopes/
 */

/**
 * Set the credentials given on Spotify's My Applications page.
 * https://developer.spotify.com/my-applications
 */
var spotifyApi = new SpotifyWebApi({
  clientId: "36118f4326504abdb0128265584bd749",
  clientSecret: "0fec25be06df4b2281d43bda86b4437c"
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log("The access token expires in " + data.body["expires_in"]);
    console.log("The access token is " + data.body["access_token"]);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function(err) {
    console.log(
      "Something went wrong when retrieving an access token",
      err.message
    );
  }
);
