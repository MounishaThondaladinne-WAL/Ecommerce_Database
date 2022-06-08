"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_User_Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.EcommerceUser);
    }
  }
  E_User_Card.init(
    {
      cardnumber: DataTypes.NUMBER,
      expiry_date: DataTypes.DATE,
      cvv: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "E_User_Card",
    }
  );
  return E_User_Card;
};
