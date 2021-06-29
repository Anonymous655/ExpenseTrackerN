const Sequelize = require("sequelize")

const db = new Sequelize('ExpenseTracker', 'anonymous', 'kaushik123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = db;