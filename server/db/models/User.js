const Sequelize = require("sequelize")
const bcrypt = require("bcrypt")
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

//Validate Password
User.prototype.checkPassword = function(input) {
  return bcrypt.compare(input, this.password)
}

const setPassword = user => {
  if (user.changed("password")) {
    return bcrypt
      .hash(user.password, 10)
      .then(hash => {
        user.password = hash
        return user
      })
      .catch(console.error)
  }
}

User.beforeCreate(setPassword)
User.beforeUpdate(setPassword)
