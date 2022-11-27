const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const Order = db.define('orders', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isNumeric:true
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isNumeric:true
        }
    },
    process: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    designer:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"Daniela Salazar"
    },
    maker:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:"Daniel Yasig"
    }

},
    { timestamps: true }
)


module.exports = Order