const express = require("express")
const { db } = require("./db")
const app = express()
const path = require("path")
const volleyball = require("volleyball")
const compression = require("compression")
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const sessionStore = new SequelizeStore({ db })
const passport = require("passport")
const authRouter = require("./auth")
const apiRouter = require("./api")
const { User } = require("./db")
// const socketio = require('socket.io')

app.use(volleyball)
app.use(express.json({ extended: true }))
app.use(express.urlencoded())

// Use Compression
app.use(compression())

// Create Session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "my best friend is Cody",
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
)

// Initialize Passport & Serialize User
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) =>
  User.findById(id)
    .then(function(user) {
      done(null, user)
    })
    .catch(done)
)

app.use((req, res, next) => {
  if (!req.session.counter) req.session.counter = 0
  console.log("COUNTER: ", ++req.session.counter)
  console.log("CURRENT USER ID: ", !!req.user && req.user.id)
  next()
})

app.use("/api", apiRouter)
app.use("/auth", authRouter)
app.use(express.static(path.join(__dirname, "../public")))

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).send(err.message || "Internal Error")
})

module.exports = app
