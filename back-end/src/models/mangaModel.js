const {DataTypes} = require('sequelize');
const sequelize = require('../configs/pgdbConfig');

const Manga = sequelize.define('Manga', {
    manga_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'mangas',
    timestamps: false
});

module.exports = Manga;