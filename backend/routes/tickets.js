const { Router } = require('express');
const { currentUser } = require('../middlewares/current_user');
const { getTickets } = require('../controllers/tickets/getTickets');
const { createTicket } = require('../controllers/tickets/createTicket');
const { body } = require('express-validator');
const { requestValidator } = require('../middlewares/request_validator');
const router = Router();


router.get('/', currentUser, getTickets);
router.post('/', [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('description').not().isEmpty().withMessage('Description is required')
],requestValidator, currentUser, createTicket);

module.exports = {
    router
}