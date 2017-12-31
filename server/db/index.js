const db = require("./_db.js")
const Bill = require("./models/bill")
const User = require("./models/user")
const UserBills = require("./models/userBills")

User.belongsToMany(Bill, { through: UserBills })
Bill.belongsToMany(User, { through: UserBills })

module.exports = {
  db,
  Bill,
  User,
  UserBills
}
