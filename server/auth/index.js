const router = require("express").Router()
const bcrypt = require("bcrypt")
const { User } = require("../db")

router.get("/", (req, res, next) => {
  res.send(req.user)
})

router.post("/login", (req, res, next) => {
  const { email, password } = req.body
  let user = {}
  const reject = () => {
    let err = new Error("Email/User Doesn't Match")
    err.status = 401
    throw err
  }
  User.findOne({ where: { email } })
    .then(foundUser => {
      if (!foundUser) {
        reject()
      } else {
        user = foundUser
        return bcrypt.compare(password, user.password)
      }
    })
    .then(isValid => {
      if (isValid) {
        req.login(user, err => {
          if (err) throw err
          else res.json(user)
        })
      } else {
        reject()
      }
    })
    .catch(next)
})

router.post("/signup", (req, res, next) => {
  const newUser = req.body
  bcrypt
    .hash(newUser.password, 10)
    .then(hash => {
      newUser.password = hash
      return User.create(newUser)
    })
    .then(user => res.status(201).json(user))
    .catch(next)
})

router.delete("/logout", (req, res, next) => {
  req.logout()
  res.sendStatus(204)
})

module.exports = router
