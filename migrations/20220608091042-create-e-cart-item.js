"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("E_Cart_Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "E_Products",
          key: "id",
          as: "productId",
        },
      },
      cartId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "E_Carts",
          key: "id",
          as: "cartId",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("E_Cart_Items");
  },
};
