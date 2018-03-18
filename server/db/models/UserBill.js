const Sequelize = require("sequelize")
const db = require("../_db")
const Bill = require("./bill")

const UserBills = db.define("user-bills", {
  percentageOwed: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  amountOwed: {
    type: Sequelize.VIRTUAL,
    get() {
      return Bill.findById(this.getDataValue("billId"))
        .then(bill => bill.totalOwed * this.getDataValue("percentageOwed"))
        .catch(err => console.error(err))
    }
  },
  amountPaid: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  paid: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue("amountOwed") === this.getDataValue("amountPaid")
    }
  },
})

module.exports = UserBills
