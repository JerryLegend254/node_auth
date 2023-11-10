const express = require("express")
const { httpsGetAllEvents } = require("../controllers/events.controller")
const { checkLoggedIn } = require("../controllers/auth.controller")


const EventsRouter = express.Router()


EventsRouter.get("/", checkLoggedIn, httpsGetAllEvents)


module.exports = EventsRouter