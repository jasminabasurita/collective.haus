const express = require("express")
const app = express()
const path = require("path")
const volleyball = require("volleyball")
const session = require("express-session")
const passport = require("passport")
const authRouter = require("./auth")
const apiRouter = require("./api")
const { User } = require("./db")

app.use(volleyball)
app.use(express.json())
app.use(express.urlencoded())
app.use(
  session({
    secret: "Ññññññooooooo",
    resave: false,
    saveUninitialized: true
  })
)

app.use(passport.initialize())
passport.serializeUser(function(user, done) {
  done(null, user.id)
})
passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(function(user) {
      done(null, user)
    })
    .catch(done)
})
app.use(passport.session())

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
