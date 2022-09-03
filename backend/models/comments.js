'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.belongsTo(models.tickets, { foreignKey: 'ticket_id' });
      comments.belongsTo(models.students, { 
        foreignKey: 'commented_by',
        constraints: false
      });
      comments.belongsTo(models.admins, { 
        foreignKey: 'commented_by',
        constraints: false
      });
    }
  }
  comments.init({
    message: DataTypes.STRING,
    commented_by_type: DataTypes.STRING,
    commented_by: DataTypes.INTEGER,
    ticket_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'comments',
    underscored: true,
  });
  return comments;
};