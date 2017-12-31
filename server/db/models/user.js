const Sequelize = require("sequelize")
const db = require("../_db.js")
const bcrypt = require("bcrypt")

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return (
        this.getDataValue("firstName") + " " + this.getDataValue("lastName")
      )
    }
  },
  email: {
    type: Sequelize,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    set(input) {
      bcrypt.hash(input, 12, (err, hash) => {
        if (err) throw err
        else return hash
      })
    }
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
