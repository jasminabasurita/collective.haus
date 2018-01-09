const router = require("express").Router()
const { UserBills } = require("../db")

router.get("/active/:userId", (req, res, next) => {
  const { userId } = req.params
  UserBills.findAll({ where: { userId, paid: false } })
    .then(userBills => res.json(userBills))
    .catch(next)
})

router.get("/:userId/:billId", (req, res, next) => {
  const { userId, billId } = req.params
  UserBills.findOne({ where: { userId, billId } })
    .then(userBill => res.json(userBill))
    .catch(next)
})

module.exports = router
