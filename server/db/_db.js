const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/pay-yo-billz', {logging: false})

module.exports = db
