const db = require("./_db.js")
const Bill = require("./models/bill")
const User = require("./models/user")
const UserBills = require("./models/userBills")

User.belongsToMany(Bill, { through: "user-bills" })
Bill.belongsToMany(User, { through: "user-bills" })

module.exports = {
  db,
  Bill,
  User,
  UserBills
}
