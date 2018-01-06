const router = require("express").Router()

router.use("/bills", require("./bills"))
router.use("/users", require("./users"))

module.exports = router
