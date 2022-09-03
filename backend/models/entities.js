'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      entities.hasMany(models.students, { foreignKey: 'hostel_id' });
      entities.hasMany(models.admins, { foreignKey: 'entity_id' });
    }
  }
  entities.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'entities',
    underscored: true,
  });
  return entities;
};