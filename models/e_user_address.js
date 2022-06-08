"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_User_Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.EcommerceUser);
      this.hasMany(models.E_order, {
        foreignKey: "userAddressId",
      });
    }
  }
  E_User_Address.init(
    {
      line1: DataTypes.STRING,
      line2: DataTypes.STRING,
      city: DataTypes.STRING,
      pincode: DataTypes.NUMBER,
      mobile_number: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "E_User_Address",
    }
  );
  return E_User_Address;
};
