const db = require("./_db.js")
const Bill = require("./models/bill")
const User = require("./models/user")
const UserBills = require("./models/userBills")
const Comment = require("./models/comment")

User.belongsToMany(Bill, { through: "user-bills" })
Bill.belongsToMany(User, { through: "user-bills" })

Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = {
  db,
  Bill,
  User,
  UserBills,
  Comment
}
