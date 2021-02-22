const sequelize = require('sequelize')

const conn = new sequelize(
    'learn',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        logging: false
    }
)

module.exports = conn