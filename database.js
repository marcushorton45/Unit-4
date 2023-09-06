require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgresql://postgres:1a2s3d4f5g6h7j8k9l@db.diysvdmwdmymgoigcbjp.supabase.co:5432/postgres', {
    dialect: 'postgres',
    dialectOptions: {
          ssl: {
            rejectUnauthorized: false,
          },
        },

})

module.exports = {
    sequelize
}