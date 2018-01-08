const router = require("express").Router()
const { User, Comment, db } = require("../db")

router.get("/", (req, res, next) => {
  Comment.findAll({ order: [["createdAt", "DESC"]], limit: 10 })
    .then(comments => res.json(comments))
    .catch(next)
})

router.post("/", (req, res, next) => {
  Comment.create(req.body)
    .then(comment => res.json(comment))
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  Comment.findById(req.params.id)
    .then(comment => comment.update(req.body))
    .then(comment => res.json(comment))
    .catch(next)
})

module.exports = router
