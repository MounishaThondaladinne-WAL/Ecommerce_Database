"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("E_orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      total: {
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
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "EcommerceUsers",
          key: "id",
          as: "userId",
        },
      },
      orderStatusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "E_order_statuses",
          key: "id",
          as: "orderStatusId",
        },
      },
      userAddressId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "E_User_Addresses",
          key: "id",
          as: "userAddressId",
        },
      },
      paymentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "EcommercePayments",
          key: "id",
          as: "paymentId",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("E_orders");
  },
};
