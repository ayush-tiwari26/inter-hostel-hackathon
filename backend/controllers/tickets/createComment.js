const { comments, tickets, admins, students, entities } = require('../../models');
const { NotAuthorizedError } = require('../../errors/not_authorized_error');
const createComment = async (req, res) => {
    const { message } = req.body;
    const { id: ticket_id } = req.params;
    if (!req.currentUser) {
        throw new NotAuthorizedError("Can't create comment without login");
    }
    if (req.currentUser.student) {
        await comments.create({
            message,
            commented_by: req.currentUser.student.id,
            commented_by_type: 'student',
            ticket_id
        });
    }
    if (req.currentUser.admin) {
        await comments.create({
            message,
            commented_by: req.currentUser.admin.id,
            commented_by_type: 'admin',
            ticket_id
        });
    }
    const ticket = await tickets.findOne({
        where: {
            id: ticket_id
        },
        include: [
            {
                model: comments,
                include: [
                    {
                        model: students,
                        attributes: ['id', 'name', 'email']
                    },
                    {
                        model: admins,
                        attributes: ['id', 'name', 'email']
                    }
                ]

            }, {
                model: admins,
                attributes: ['id', 'name', 'email']
            }, {
                model: students,
                include: [{
                    model: entities
                }],
                attributes: ['id', 'name', 'email', 'phone']
            }
        ]
    });
    const payload = {
        id: ticket.id,
        title: ticket.title,
        description: ticket.description,
        created_by: {
            id: ticket.student.id,
            name: ticket.student.name,
            email: ticket.student.email,
            roll_no: ticket.student.roll_no,
            phone: ticket.student.phone,
            hostel: {
                id: ticket.student.entity.id,
                name: ticket.student.entity.name
            }
        },
        assigned_to: ticket.admin,
        comments: ticket.comments.map(comment => {
            return {
                id: comment.id,
                message: comment.message,
                commented_by: comment.commented_by_type === 'student' ? comment.student : comment.admin,
                commentor_type: comment.commented_by_type,
            }
        }),
        createdAt: ticket.createdAt,
        updatedAt: ticket.updatedAt,
    }
    res.status(201).json(payload);
};

module.exports = {
    createComment
};