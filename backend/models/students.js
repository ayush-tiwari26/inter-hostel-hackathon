'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  students.init({
    name: DataTypes.STRING,
    roll_no: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    hostel_id: DataTypes.INTEGER,
    password_hash: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'students',
    underscored: true,
  });
  return students;
};