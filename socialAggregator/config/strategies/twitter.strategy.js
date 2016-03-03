var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function() {
    passport.use(new TwitterStrategy(
        {
            consumerKey: '1xN0N8hsTcO5bGAkbQYsw3fQ0',
            consumerSecret: 'Ab40uikISXiqTXMOJJduPhJFBdAVS9UMTFRKaDNZi2I9WXnisp',
            callbackURL: 'http://localhost:3000/auth/twitter/callback',
            passReqToCallback: true
        },
        function(req, token, tokenSecret, profile, done) { // Function that will be called when twitter call the callbackURL
            var user = {};

            // user.email = profile.emails[0].value;
            user.image = profile._json.profile_image_url;
            user.displayName = profile.displayName;

            user.twitter = {};
            user.twitter.id = profile.id;
            user.twitter.token = token;

            done(null, user);
        }
    ));
}
