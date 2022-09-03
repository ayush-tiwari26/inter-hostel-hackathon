const { NotAuthorizedError } = require('../../errors/not_authorized_error');
const { BadRequestError } = require('../../errors/bad_request_error');
const { students } = require('../../models');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { sendmail } = require('../../utils/sendmail');
const signup = async (req, res) => {
    if (!req.currentUser?.admin) {
        throw new NotAuthorizedError("Not authorized");
    }
    const { email, name, phone, hostel, room_no, roll_no } = req.body;
    const user = await students.findOne({
        where: { email }
    });
    if (user) {
        throw new BadRequestError('User already exists');
    }
    const password = crypto.randomBytes(4).toString('hex');
    const password_hash = await bcrypt.hash(password, 10);
    const newStudent = await students.create({
        email,
        name,
        phone,
        roll_no,
        password_hash,
        hostel_id: hostel,
        room_no
    });
    const studentHostel = await newStudent.getEntity();
    const payload = {
        student: {
            id: newStudent.id,
            email: newStudent.email,
            name: newStudent.name,
            phone: newStudent.phone,
            roll_no: newStudent.roll_no,
            hostel: {
                id: studentHostel.id,
                name: studentHostel.name,
                room_no: newStudent.room_no
            }
        }

    }
    res.status(201).json(payload);
    sendmail(email, "Welcome to the team", `Your password is ${password}`);
}

module.exports = {
    signup
}