"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EcommerceUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.E_User_Card, {
        foreignKey: "userId",
      });
      this.hasMany(models.E_User_Address, {
        foreignKey: "userId",
      });
      this.hasOne(models.E_Cart, {
        foreignKey: "userId",
      });
      this.hasMany(models.E_order, {
        foreignKey: "userId",
      });
    }
  }
  EcommerceUser.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EcommerceUser",
    }
  );
  return EcommerceUser;
};
