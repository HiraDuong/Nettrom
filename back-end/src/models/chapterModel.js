const {DataTypes} = require('sequelize');
const sequelize = require('../configs/pgdbConfig');

const Chapter = sequelize.define('Chapter', {
    chapter_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    manga_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    chapter_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    upload_date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'chapters',
    timestamps: false
});

module.exports = Chapter;