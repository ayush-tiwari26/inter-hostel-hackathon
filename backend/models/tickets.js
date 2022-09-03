'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tickets.belongsTo(models.students, { foreignKey: 'created_by' });
      tickets.belongsTo(models.admins, { foreignKey: 'assigned_to' });
      tickets.hasMany(models.comments, { foreignKey: 'ticket_id' });
    }
  }
  tickets.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    assigned_to: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tickets',
    underscored: true,
  });
  return tickets;
};