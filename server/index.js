const express = require('express')
const app = express()
const path = require('path')
const volleyball = require('volleyball')
const session = require('session')
const passport = require('passport')
const authRouter = require('./auth')
const apiRouter = require('./api')

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
app.use(passport.session())

app.use('/api', apiRouter)
app.use('/auth', authRouter)
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (req, res, next) => {
  res.send('/index.html')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).send(err.message || "Internal Error")
})

module.exports = app
