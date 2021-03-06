const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

module.exports = function(passport, user) {
  const User = user;

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOrCreate({
          where: { googleId: profile.id }
        }).spread((user, created) => {
          let model = !created ? user : created;
          done(
            null,
            model.get({
              plain: true
            })
          );
        });
      }
    )
  );
};
