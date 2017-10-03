const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET OAuth Google page. */
router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/callback', passport.authenticate('google'));

module.exports = router;
