const { Model, DataTypes } = require ('sequelize');
const sequelize = require('..config/connection');
const Artist = require('./Artist');


class ArtPiece extends Model {}

ArtPiece.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
        },
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'artist',
                key: 'id'
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }, 
        },
        art_style: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(6,2), 
            allowNull: false,
            validate: {
                isDecimal: true
            },
        },
        is_sold: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        sold_to: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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