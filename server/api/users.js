const router = require("express").Router()
const { User } = require("../db")

router.param("id", (req, res, next, id) => {
  User.findById(id, {
    attributes: ["id", "firstName", "lastName", "name", "email", "isCurrentHouseMate"]
  })
    .then(user => {
      if (!user) {
        let err = new Error("User Not Found")
        err.status = 404
        throw err
      }

      req.requestedUser = user
      next()
    })
    .catch(next)
})

router.get("/", (req, res, next) => {
  User.findAll({
    attributes: ["id", "firstName", "lastName", "name", "email", "isCurrentHouseMate"]
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get("/:id", (req, res, next) => {
  res.json(req.requestedUser)
})

module.exports = router
