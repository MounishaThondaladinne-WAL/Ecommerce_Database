"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("E_returns", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reason: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      orderItemId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "E_Order_Items",
          key: "id",
          as: "orderItemId",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("E_returns");
  },
};
