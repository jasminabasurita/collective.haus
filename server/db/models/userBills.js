const Sequelize = require("sequelize")
const db = require("../_db")

const UserBills = db.define("user-bills" , {
  percentageOwed: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  amountPaid: {
    type:Sequelize.FLOAT,
    defaultValue: 0
  }
})
