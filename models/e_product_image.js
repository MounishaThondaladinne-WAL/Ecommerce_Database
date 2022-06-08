"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class E_Product_Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.E_Product);
    }
  }
  E_Product_Image.init(
    {
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "E_Product_Image",
    }
  );
  return E_Product_Image;
};
