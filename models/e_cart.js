"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.EcommerceUser);
      this.hasMany(models.E_Cart_Item, {
        foreignKey: "cartId",
      });
    }
  }
  E_Cart.init(
    {
      total: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "E_Cart",
    }
  );
  return E_Cart;
};
