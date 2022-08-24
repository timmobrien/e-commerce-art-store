const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');


class Order extends Model {};

Order.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    total_price: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    order_items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders',
  }
)

module.exports = Order