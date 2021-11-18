const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use(new GoogleStrategy({
    clientID: '798111478347-nog7lm6bbr5rdo0pmgqlf1p389jan1d6.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
// use the profile info (mainly profile id) to check if the user is registered in your database
      return done(null, profile);
  }
));