const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongo = require("../config/mongoClient").client;

const cliendId = "01577be964124996a91fb11fd24b7c56";
const clientSecret = "8600089034414dbf9a292821c461f9e9";

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    // const user = users.find((obj) => obj.id === id);
    // done(null, user ? user : false);
    done(null, user);
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: cliendId,
            clientSecret: clientSecret,
            callbackURL: "http://localhost:8000/api/spotify/callback",
        },
        function(accessToken, refreshToken, expires_in, profile, done) {
            // asynchronous verification, for effect...
            process.nextTick(function() {
                const email = profile.emails[0].value;

                mongo.findUserByUserName(email, function(err, user) {
                    if (!user) {
                        mongo.registerUser(
                            email,
                            profile.id, //spotifyId
                            function(err, inserted) {
                                inserted.refreshToken = refreshToken;
                                inserted.accessToken = accessToken;
                                if (!err) {
                                    return done(null, inserted);
                                } else {
                                    return done(null, false, {
                                        message: `Unable to create user.`,
                                    });
                                }
                            }
                        );
                    } else {
                        user.accessToken = accessToken;
                        user.refreshToken = refreshToken;
                        return done(null, user);
                    }
                });
            });
        }
    )
);

passport.use(
    new LocalStrategy((username, password, done) => {
        mongo.checkCredentialsCorrectness(username, password, function(
            err,
            user
        ) {
            if (!user) {
                return done(null, false, {
                    message: `Wrong username or password`,
                });
            }
            return done(null, user);
        });
    })
);
