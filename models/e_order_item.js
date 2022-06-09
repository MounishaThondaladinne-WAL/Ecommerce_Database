"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_Order_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.E_Product);
      this.belongsTo(models.E_order);
      this.belongsTo(models.EcommerceDelivery);
      this.hasOne(models.E_return, {
        foreignKey: "orderItemId",
      });
    }
  }
  E_Order_Item.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "E_Order_Item",
    }
  );
  return E_Order_Item;
};
