const { Router } = require('express');
const { body } = require('express-validator');
const { requestValidator } = require('../middlewares/request_validator');

const { signin } = require('../controllers/admin/signin');
const { signup } = require('../controllers/admin/signup');

const {currentUser} = require('../middlewares/current_user');
const router = Router();
router.post('/signin', [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().notEmpty().withMessage("Password must not be empty")
], requestValidator, signin);

router.post('/signup', [
    body("email").isEmail().withMessage("Email must be valid"),
    body("name").trim().notEmpty().withMessage("Name must not be empty"),
    body("phone").trim().notEmpty().withMessage("Phone must not be empty"),
    body("designation").trim().notEmpty().withMessage("Designation must not be empty"),
    body("entity").trim().notEmpty().withMessage("Entity must not be empty")
], requestValidator, currentUser, signup);

module.exports = { router };