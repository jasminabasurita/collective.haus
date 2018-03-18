const Sequelize = require("sequelize")
const db = require("../_db.js")

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec"
]

const BillItem = db.define("bill-item", {
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  month: {
    type: Sequelize.ENUM(...months),
    defaultValue: months[new Date(Date.now()).getMonth()]
  },
  year: {
    type: Sequelize.INTEGER,
    defaultValue: new Date(Date.now()).getFullYear()
  },
  dueDate: {
    type: Sequelize.DATE
  }
})

module.exports = BillItem
