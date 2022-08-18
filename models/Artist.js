const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');


class Artist extends Model {}

Artist.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
        }
    },
    // age: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    birthplace: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    art_style: {
        type: DataTypes.STRING, 
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'artist',
  }
)


module.exports = Artist;