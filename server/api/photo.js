const router = require("express").Router()
const { User } = require("../db")
const multer = require("multer")

// let storage = multer.memoryStorage()
let upload = multer({ dest: "uploads/" })

router.post("/", upload.single("photo"), (req, res, next) => {
  console.log(req.file)
})

module.exports = router
