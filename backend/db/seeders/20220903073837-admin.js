'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  
  async up (queryInterface, Sequelize) {
    const pass = await bcrypt.hash('123456', 10);
    await queryInterface.bulkInsert('admins', [{
      name: 'Iyer',
      email: 'iyer@iitm.ac.in',
      password_hash: pass,
      phone: '1234567890',
      designation: 'Hostel Manager',
      entity_id: 100,
      status: true,
      created_at: new Date(),
      updated_at: new Date()
    }])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
