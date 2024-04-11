const {DataTypes} = require('sequelize');
const sequelize = require('../configs/pgdbConfig');

const Image = sequelize.define('Image', {
    image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chapter_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'images',
    timestamps: false
});

module.exports = Image;