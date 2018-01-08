const router = require("express").Router()

router.use("/bills", require("./bills"))
router.use("/users", require("./users"))
router.use("/comments", require("./comments"))

module.exports = router
