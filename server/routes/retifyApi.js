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

module.exports = router;
