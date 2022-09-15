'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('CheckUps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DiseaseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Diseases'
          },
          key: 'id'
        }
      },
      DoctorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'UserProfiles'
          },
          key: 'id'
        }
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'UserProfiles'
          },
          key: 'id'
        }
      },
      MedicineId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Medicines'
          },
          key: 'id'
        }
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      cost: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('CheckUps');
  }
};