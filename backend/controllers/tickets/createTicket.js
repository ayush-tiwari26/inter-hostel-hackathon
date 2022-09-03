const { tickets, admins } = require('../../models');
const { NotAuthorizedError } = require('../../errors/not_authorized_error');
const createTicket = async (req, res) => {
    if (!req.currentUser?.student) {
        throw new NotAuthorizedError("Can't create ticket without student login");
    }
    const { title, description } = req.body;
    const asignee = await admins.findOne({
        where: {
            entity_id: req.currentUser.student.hostel.id
        }
    });
    const ticket = await tickets.create({
        title,
        description,
        created_by: req.currentUser.student.id,
        assigned_to: asignee.id
    });
    res.status(201).json({
        ...ticket.dataValues,
        created_by: req.currentUser.student,
        assigned_to: asignee
    });
}

module.exports = {
    createTicket
}