"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Merchant);
      this.belongsTo(models.EcommerceCategory);
      this.hasMany(models.E_Product_Image, {
        foreignKey: "productId",
      });
      this.hasMany(models.E_Cart_Item, {
        foreignKey: "productId",
      });
      this.hasMany(models.E_Product_Image, {
        foreignKey: "productId",
      });
    }
  }
  E_Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      quntatity: DataTypes.NUMBER,
      price: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "E_Product",
    }
  );
  return E_Product;
};
