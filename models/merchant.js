"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.E_Product, {
        foreignKey: "merchantId",
        as: "E_Products",
      }),
        this.belongsToMany(models.EcommerceCategory, {
          through: "Merchant_Category",
        });
    }
  }
  Merchant.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      mobile_number: DataTypes.NUMBER,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Merchant",
    }
  );
  return Merchant;
};
