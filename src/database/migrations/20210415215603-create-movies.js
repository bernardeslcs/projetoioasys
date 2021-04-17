'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.createTable('movies', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name:{
          type: Sequelize.STRING,
          allowNull: false
        },
        nameDirector: {
          type: Sequelize.STRING,
          allowNull: false
        },
        gender:{
          type: Sequelize.STRING,
          allowNull: false
        },
        duration:{
          type: Sequelize.INTEGER,
          allowNull: false
        },
        votes: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        details: {
          type: Sequelize.STRING,
          allowNull: true
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


