const db = require("../_db")
const Sequelize = require("sequelize")

const Comment = db.define("comments", {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Comment
