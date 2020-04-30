/* eslint-disable no-unused-vars */
var express = require("express");
var router = express.Router();
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi();
var passport = require("passport");

router.get(
    "/login",
    passport.authenticate("spotify", {
        scope: [
            "user-read-email",
            "user-read-private",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "playlist-read-private",
        ],
        failureRedirect: "http://localhost:8080/#/login",
    })
);

router.get(
    "/callback",
    passport.authenticate("spotify", {
        failureRedirect: "http://localhost:8080/#/login",
    }),
    (req, res) => {
        res.redirect("http://localhost:8080/#/callback");
    }
);

router.get("/me", (req, res) => {
    if (req.isAuthenticated()) {
        setTokens(req.user);
        spotifyApi
            .getMe()
            .then((data) => res.send(data.body))
            .catch((err) => res.send(err));
    } else {
        res.status(401).send("UNAUTHORIZED!");
    }
});

router.get("/me/recently-played", (req, res) => {
    // console.log(req.user);
    setTokens(req.user);
    if (req.isAuthenticated()) {
        spotifyApi
            .getMyRecentlyPlayedTracks()
            .then((data) => res.send(data.body))
            .catch((err) => res.send(err));
    } else {
        res.status(401).send("UNAUTHORIZED!");
    }
});

router.get("/me/songs", (req, res) => {
    // console.log(req.user);
    setTokens(req.user);
    if (req.isAuthenticated()) {
        spotifyApi
            .getMySavedTracks()
            .then((data) => res.send(data.body))
            .catch((err) => res.send(err));
    } else {
        res.status(401).send("UNAUTHORIZED!");
    }
});

router.get("/artists/:id/albums", (req, res) => {
    console.log(req.params.id);
    if (req.isAuthenticated()) {
        setTokens(req.user);
        spotifyApi
            .getArtistAlbums(req.params.id)
            .then((data) => res.send(data.body))
            .catch((err) => res.send(err));
    } else {
        res.status(401).send("UNAUTHORIZED!");
    }
});

router.get("/albums/:id/songs", (req, res) => {
    console.log(req.params.id);
    if (req.isAuthenticated()) {
        setTokens(req.user);
        spotifyApi
            .getAlbum(req.params.id)
            .then((data) => data.body.tracks.map((track) => track.id))
            .then((trackIds) => spotifyApi.getTracks(trackIds))
            .then((data) => res.send(data.body))
            .catch((err) => res.send(err));
    } else {
        res.status(401).send("UNAUTHORIZED!");
    }
});

router.get("/songs/:id", (req, res) => {
    console.log(req.params.id);
    if (req.isAuthenticated()) {
        setTokens(req.user);
        spotifyApi
            .getTrack(req.params.id)
            .then((data) => res.send(data.body))
            .catch((err) => res.send(err));
    } else {
        res.status(401).send("UNAUTHORIZED!");
    }
});

router.get("/artists/:id", (req, res) => {
    console.log(req.params.id);
    if (req.isAuthenticated()) {
        setTokens(req.user);
        spotifyApi
            .getArtist(req.params.id)
            .then((data) => res.send(data.body))
            .catch((err) => res.send(err));
    } else {
        res.status(401).send("UNAUTHORIZED!");
    }
});

function setTokens(user) {
    spotifyApi.setAccessToken(user.accessToken);
    spotifyApi.setRefreshToken(user.refreshToken);
}

// TODO: implement this middleware
// function authenticate(req, res, next) {
//     if (req.isAuthenticated()) {
//         next();
//     } else {
//         res.status(401).send("UNAUTHORIZED!");
//     }
// }

module.exports = router;
