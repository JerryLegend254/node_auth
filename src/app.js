const express = require("express");
const path = require("path")

const AuthRouter = require("./routes/auth.routes");
const EventsRouter = require("./routes/events.routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")))


app.use("/auth", AuthRouter)
app.use("/events", EventsRouter);
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
);


module.exports = app;
