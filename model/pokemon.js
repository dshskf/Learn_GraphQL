const sequelize = require('sequelize')
const db = require('../config/db')

const pokemon = db.define('pokemon', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    element: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    level: {
        type: sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = pokemon