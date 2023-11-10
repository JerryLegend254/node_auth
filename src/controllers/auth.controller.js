function httpsGoogleOAuth(req, res) {
  res.send("Log in");
}

function checkLoggedIn(req, res, next) {
  const loggedIn = true;

  if (!loggedIn) {
    return res
      .status(401)
      .json({ error: "Cannot access this route, please log in" });
  }
  next();
}

module.exports = {
    httpsGoogleOAuth,
    checkLoggedIn,
};
