const Sequelize = require("sequelize")
const db = require("../_db.js")

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  photo: {
    type: Sequelize.BLOB
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isCurrentHouseMate: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = User
