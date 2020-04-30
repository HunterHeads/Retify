/* eslint-disable no-unused-vars */
var express = require("express");
var router = express.Router();
var passport = require("passport");
const mongo = require("../config/mongoClient").client;

router.post("/register", function(req, res) {
    console.log("inside register");
    console.log(req.body);
    mongo.findUserByUserName(req.body["username"], function(err, user) {
        if (user) {
            res.status(409).send("User with given username already exists");
        } else {
            mongo.registerUser(
                req.body["username"],
                req.body["password"],
                function(err, inserted) {
                    if (!err) {
                        res.status(201).send(true);
                    } else {
                        res.status(500).send(false);
                    }
                }
            );
        }
    });
});

router.post("/login", function(req, res, next) {
    console.log("inside login");

    passport.authenticate("local", (err, user, info) => {
        if (info) {
            return res.status(401).send(info.message);
        }
        if (err) {
            return next(err);
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            return res
                .status(200)
                .send("LOGGED IN - sessionId is saved within cookie");
        });
    })(req, res, next);
});

router.get("/logout", function(req, res) {
    req.logout();
    res.send("LOGGED OUT - sessionId is no longer valid");
});

router.put("/rate/song", function(req, res) {
    console.log("inside rate song function");
    console.log(req.body);

    mongo.rateSong(
        req.body["songId"],
        req.body["userId"],
        req.body["rate"],
        function(err, inserted) {
            if (!err) {
                res.status(200).send();
            } else {
                res.status(500).send();
            }
        }
    );
});

router.put("/rate/artist", function(req, res) {
    console.log("inside rate song function");
    console.log(req.body);

    mongo.rateArtist(
        req.body["artistId"],
        req.body["userId"],
        req.body["rate"],
        function(err, inserted) {
            if (!err) {
                res.status(200).send();
            } else {
                res.status(500).send();
            }
        }
    );
});

router.get("/rate/song", function(req, res) {
    console.log("inside get song rate function");

    if (req.query.userId == undefined) {
        mongo.getAverageSongRate(req.query.songId, function(err, extracted) {
            if (!err) {
                res.status(200).send(extracted);
            } else {
                res.status(500).send();
            }
        });
    } else {
        mongo.getSongRateForSpecificUser(
            req.query.songId,
            req.query.userId,
            function(err, extracted) {
                if (!err) {
                    res.status(200).send(extracted);
                } else {
                    res.status(500).send(err);
                }
            }
        );
    }
});

router.get("/rate/artist", function(req, res) {
    console.log("inside get artist rate function");

    if (req.query.userId == undefined) {
        mongo.getAverageArtistRate(req.query.artistId, function(
            err,
            extracted
        ) {
            if (!err) {
                res.status(200).send(extracted);
            } else {
                res.status(500).send();
            }
        });
    } else {
        mongo.getArtistRateForSpecificUser(
            req.query.artistId,
            req.query.userId
        );
    }
});

module.exports = router;
