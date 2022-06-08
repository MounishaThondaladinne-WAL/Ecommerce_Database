"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_order_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.E_order, {
        foreignKey: "orderStatusId",
      });
    }
  }
  E_order_status.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "E_order_status",
    }
  );
  return E_order_status;
};
