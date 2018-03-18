const router = require("express").Router()
const { User, Message, db } = require("../db")

router.get("/", (req, res, next) => {
  Message.findAll({ order: [["createdAt", "DESC"]], limit: 10 })
    .then(messages => res.json(messages))
    .catch(next)
})

router.post("/", (req, res, next) => {
  Message.create(req.body)
    .then(message => res.json(message))
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  Message.findById(req.params.id)
    .then(message => message.update(req.body))
    .then(message => res.json(message))
    .catch(next)
})

module.exports = router
