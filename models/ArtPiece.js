const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Artist = require('./Artist');

class ArtPiece extends Model {};

ArtPiece.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
        },
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Artist,
                key: 'id'
            },
        },
        art_style: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL, 
            allowNull: false,
            validate: {
                isDecimal: true
            },
        },
        is_sold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        sold_to: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'art_piece',
      }
)

module.exports = ArtPiece;