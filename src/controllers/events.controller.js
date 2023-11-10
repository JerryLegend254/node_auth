const { getAllEvents } = require("../models/events.model");

function httpsGetAllEvents(req, res) {
    res.status(200).json(getAllEvents())
}

module.exports = {
    httpsGetAllEvents,
}