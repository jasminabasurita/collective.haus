const Sequelize = require("sequelize")
const db = require("../_db")

const House = db.define("house", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  photo: Sequelize.BLOB
})

module.exports = House
