const { students, entities } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../errors/not_authorized_error');
const signin = async (req, res) => {

    const { email, password } = req.body;
    const student = await students.findOne({
        where: { email },
        include: [entities]
    });
    if (!student) {
        throw new NotAuthorizedError('Invalid username');
    }
    const isMatch = await bcrypt.compare(password, student.password_hash);
    if (!isMatch) {
        throw new NotAuthorizedError('Invalid password');
    }
    const payload = {
        student: {
            id: student.id,
            email: student.email,
            name: student.name,
            phone: student.phone,
            rollno: student.roll_no,
            hostel: {
                id: student.entity.id,
                name: student.entity.name,
                room: student.room_no
            }
        }
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.set('Authorization', `Bearer ${token}`);
    res.status(200).json(payload);
}
module.exports = {
    signin
}