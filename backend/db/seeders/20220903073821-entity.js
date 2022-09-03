'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('entities', [{
      id: 100,
      name: 'Jamuna',
      type: 'Hostel',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('entities', null, {});
  }
};
