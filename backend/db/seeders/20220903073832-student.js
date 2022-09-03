'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    const pass = await bcrypt.hash('123456', 10);
    await queryInterface.bulkInsert('students', [{
      name: 'Sudip',
      email: 'ce20b112@smail.iitm.ac.in',
      password_hash: pass,
      roll_no: 'CE20B112',
      phone: '1234567890',
      hostel_id: 100,
      room_no: '101',
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
