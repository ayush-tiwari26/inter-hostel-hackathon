const { Router } = require('express');
const { currentUser } = require('../middlewares/current_user');
const { getTickets } = require('../controllers/tickets/getTickets');
const { createTicket } = require('../controllers/tickets/createTicket');
const { createComment } = require('../controllers/tickets/createComment');
const { body, param } = require('express-validator');
const { requestValidator } = require('../middlewares/request_validator');
const router = Router();

router.get('/', currentUser, getTickets);
router.post('/', [
    body('title').not().isEmpty().withMessage('Title is required'),
    body('description').not().isEmpty().withMessage('Description is required')
], requestValidator, currentUser, createTicket);

router.post('/:id/comment', [
    body('message').not().isEmpty().withMessage('Message is required'),
    param('id').isNumeric().withMessage('Ticket id is required')
], requestValidator, currentUser, createComment);

module.exports = {
    router
}