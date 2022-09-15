'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.UserProfile, {foreignKey: 'UserId'})
    }
  }
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    specialist: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(el => {
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(el.password,salt)
    el.password = hash
  })
  return User;
};