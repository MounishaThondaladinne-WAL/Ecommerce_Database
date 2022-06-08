"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.EcommerceUser);
      this.belongsTo(models.E_order_status);
      this.belongsTo(models.E_User_Address);
      this.belongsTo(models.EcommercePayment);
    }
  }
  E_order.init(
    {
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "E_order",
    }
  );
  return E_order;
};
