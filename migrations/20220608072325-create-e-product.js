"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("E_Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      quntatity: {
        type: Sequelize.INTEGER,
      },
      price: {
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
      merchantId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Merchants",
          key: "id",
          as: "merchantId",
        },
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "EcommerceCategories",
          key: "id",
          as: "categoryId",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("E_Products");
  },
};
