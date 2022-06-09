"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_return extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.E_Order_Item);
    }
  }
  E_return.init(
    {
      reason: DataTypes.STRING,
      status: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "E_return",
    }
  );
  return E_return;
};
