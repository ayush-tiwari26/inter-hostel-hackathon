'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      admins.belongsTo(models.entities, { foreignKey: 'entity_id' });
      admins.hasMany(models.tickets, { foreignKey: 'assigned_to' });
    }
  }
  admins.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    entity_id: DataTypes.INTEGER,
    designation: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'admins',
    underscored: true,
  });
  return admins;
};