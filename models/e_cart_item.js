"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_Cart_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.E_Product);
      this.belongsTo(models.E_Cart);
    }
  }
  E_Cart_Item.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "E_Cart_Item",
    }
  );
  return E_Cart_Item;
};
