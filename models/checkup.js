'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CheckUp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CheckUp.hasMany(models.Disease, {foreignKey: 'DiseaseId'})
      CheckUp.hasMany(models.Medicine, {foreignKey: 'MedicineId'})
      CheckUp.belongsTo(models.UserProfile, {
        foreignKey: 'UserId',
        foreignKey: 'DoctorId'
      })
    }
  }
  CheckUp.init({
    DiseaseId: DataTypes.INTEGER,
    DoctorId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    MedicineId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    cost: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CheckUp',
  });
  return CheckUp;
};