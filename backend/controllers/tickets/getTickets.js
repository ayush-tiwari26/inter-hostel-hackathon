const { NotAuthorizedError } = require("../../errors/not_authorized_error")
const { tickets, comments, admins, students, entities } = require('../../models');
const getTickets = async (req, res) => {
    if (!req.currentUser) {
        throw NotAuthorizedError("Can't fetch tickets without login");
    }
    var allTickets = [];
    if (req.currentUser.student) {
        allTickets = await tickets.findAll({
            where: {
                created_by: req.currentUser.student.id
            },
            include: [
                {
                    model: comments,
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
    } else {
        allTickets = await tickets.findAll({
            where: {
                assigned_to: req.currentUser.admin.id
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
    }
    const payload = allTickets.map(ticket => {
        return {
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
            comments: ticket.comments.map(comment => {
                return {
                    id: comment.id,
                    message: comment.message,
                    commented_by: comment.commented_by_type === 'student' ? comment.student : comment.admin,
                    commentor_type: comment.commented_by_type,
                }
            }),
            assigned_to: ticket.admin,
            createdAt: ticket.createdAt,
            updatedAt: ticket.updatedAt,
        }
    });

    res.status(200).json(payload);
}
module.exports = {
    getTickets
}