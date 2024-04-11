const {DataTypes} = require('sequelize');
const sequelize = require('../configs/pgdbConfig');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    exp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {
    tableName: 'users',
    timestamps: false
});

module.exports = User;