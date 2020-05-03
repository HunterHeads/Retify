/* eslint-disable no-unused-vars */
var express = require("express");
var router = express.Router();
var passport = require("passport");
const client = require("../config/mongoClient").client;
// TODO: all routes to index, only index imported to main app
// import retifyApi from "./retifyApi"
// import spotifyApi from "./spotifyApi"

// var express = require("express");
// var router = express.Router();
// var passport = require("passport");

// router.get("/authrequired", (req, res) => {
//     if (req.isAuthenticated()) {
//         res.send("you hit the authentication endpoint\n");
//     } else {
//         res.send("FAILED!");
//     }
// });

router.get("/logout", function(req, res) {
    req.logout();
    res.send("LOGGED OUT - sessionId is no longer valid");
});

router.get(
    "/login-with-spotify",
    passport.authenticate("spotify", {
        scope: ["user-read-email", "user-read-private"],
        failureRedirect: "http://localhost:8080/login",
        // showDialog: true
    })
);

router.get(
    "/callback",
    passport.authenticate("spotify", {
        failureRedirect: "http://localhost:8080/login",
    }),
    function(req, res) {
        res.redirect("http://localhost:8080/home");
    }
);

router.get("/authrequired", (req, res) => {
    if (req.isAuthenticated()) {
        res.send("you hit the authentication endpoint\n");
    } else {
        res.send("FAILED!");
    }
});

router.get("/user-valid", client.userExists);

router.get("/db", client.getAll);

router.post("/create-entry", client.createEntryInCollection);

router.post("/create-entries", client.createEntriesInCollection);

module.exports = router;
