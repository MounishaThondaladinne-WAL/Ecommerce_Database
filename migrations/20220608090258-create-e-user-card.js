"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("E_User_Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      card_number: {
        type: Sequelize.INTEGER,
      },
      card_holder_name: {
        type: Sequelize.STRING,
      },
      expiry_date: {
        type: Sequelize.DATE,
      },
      cvv: {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("E_User_Cards");
  },
};
