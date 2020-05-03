/* eslint-disable no-unused-vars */
var express = require("express");
var router = express.Router();
var passport = require("passport");
const mongo = require("../config/mongoClient").client;

router.post("/register", function(req, res) {
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
    mongo.rateSong(
        req.body["songId"],
        req.user["username"],
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
    mongo.rateArtist(
        req.body["artistId"],
        req.user["username"],
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

router.get("/rate/songs/:id", function(req, res) {
    mongo.getAverageSongRate(req.params.id, function(err, extracted) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(200).send();
        }
    });
});

router.get("/rate/artists/:id", function(req, res) {
    mongo.getAverageArtistRate(req.params.id, function(err, extracted) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(200).send(err);
        }
    });
});

router.get("/my-rates/artists/:id", function(req, res) {
    mongo.getArtistRateForSpecificUser(
        req.params.id,
        req.user["username"],
        function(err, extracted) {
            if (!err) {
                res.status(200).send(extracted);
            } else {
                res.status(200).send(err);
            }
        }
    );
});

router.get("/my-rates/songs", function(req, res) {
    mongo.getAllSongsRatesForSpecificUser(req.user["username"], function(
        err,
        extracted
    ) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(200).send(err);
        }
    });
});

router.get("/my-rates/songs/:id", function(req, res) {
    mongo.getSongRateForSpecificUser(
        req.params.id,
        req.user["username"],
        function(err, extracted) {
            if (!err) {
                res.status(200).send(extracted);
            } else {
                res.status(200).send(err);
            }
        }
    );
});

router.get("/my-rates/artists", function(req, res) {
    mongo.getAllArtistsRatesForSpecificUser(req.user["username"], function(
        err,
        extracted
    ) {
        if (!err) {
            res.status(200).send(extracted);
        } else {
            res.status(200).send(err);
        }
    });
});

router.get("/top/songs", function(req, res) {
    mongo.extractAllSongs(function(err, extracted) {
        if (err) {
            res.status(500).send(err);
        } else {
            let topSongs = new Map();

            extracted.forEach((element) => {
                if (!topSongs.get(element.songId)) {
                    topSongs.set(element.songId, {
                        count: 1,
                        rates: [element.rate],
                    });
                } else {
                    const song = topSongs.get(element.songId);
                    song.count++;
                    song.rates.push(element.rate);
                }
            });
            const top50 = Array.from(topSongs.entries())
                .map((obj) => {
                    return {
                        songId: obj[0],
                        rate:
                            obj[1].rates.reduce((a, b) => a + b) /
                            obj[1].rates.length,
                        count: obj[1].count,
                    };
                })
                .sort((a, b) => b.rate - a.rate)
                .slice(0, 50);
            res.status(200).send(top50);
        }
    });
});

module.exports = router;
