const express = require("express");
const {  httpsGoogleOAuth } = require("../controllers/auth.controller");

const AuthRouter = express.Router();

AuthRouter.get("/google", httpsGoogleOAuth);
AuthRouter.get("/google/callback", httpsGoogleOAuth);

module.exports = AuthRouter;
