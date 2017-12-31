const Sequelize = require("sequelize")
const db = require("../_db")

const Bill = db.define("bill", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  totalOwed: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  month: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dueDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  billPaid: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  housiesPaid: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Bill
