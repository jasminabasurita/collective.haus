// Importing Models and DB file
const db = require("./_db.js")
const House = require("./models/House")
const User = require("./models/User")
const BillItem = require("./models/BillItem")
const BillCategory = require("./models/BillCategory")
const UserBill = require("./models/UserBill")
const Message = require("./models/Message")

User.belongsToMany(BillItem, { through: "user-bill" })
BillItem.belongsToMany(User, { through: "user-bill" })

House.hasMany(User)
User.belongsTo(House)

BillCategory.belongsTo(House)
House.hasMany(BillCategory)

Message.belongsTo(User)
Message.belongsTo(House)
User.hasMany(Message)
House.hasMany(Message)

module.exports = {
  db,
  House,
  BillItem,
  BillCategory,
  User,
  UserBill,
  Message
}
