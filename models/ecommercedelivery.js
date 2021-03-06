"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EcommerceDelivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.E_Order_Item, {
        foreignKey: "deliveryId",
      });
    }
  }
  EcommerceDelivery.init(
    {
      deliveryDate: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EcommerceDelivery",
    }
  );
  return EcommerceDelivery;
};
