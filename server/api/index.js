const router = require("express").Router()

router.use("/bills", require("./bills"))
router.use("/users", require("./users"))
router.use("/comments", require("./comments"))
router.use("/photo", require("./photo"))

module.exports = router
