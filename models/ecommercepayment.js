"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EcommercePayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.E_order, {
        foreignKey: "paymentId",
      });
    }
  }
  EcommercePayment.init(
    {
      status: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EcommercePayment",
    }
  );
  return EcommercePayment;
};
