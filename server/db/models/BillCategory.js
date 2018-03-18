const Sequelize = require("sequelize")
const db = require("../_db")

const BillCategory = db.define("bill-category", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billType: {
    type: Sequelize.ENUM("rent", "bill")
  },
  defaultCost: {
    type: Sequelize.INTEGER
  }
})

module.exports = BillCategory
