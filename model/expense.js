const Sequelize = require('sequelize')
const db = require('../database')

const Expense = db.define('expenses', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount: Sequelize.INTEGER,
    category: Sequelize.STRING,
    description: Sequelize.STRING
})
module.exports = Expense;