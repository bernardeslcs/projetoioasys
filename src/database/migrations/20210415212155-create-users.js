'use strict';

//const { password } = require("../../config/database");

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      isAdmin:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      create_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      update_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('users');
     
  }
};
