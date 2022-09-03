const { admins } = require('../../models');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { NotAuthorizedError } = require('../../errors/not_authorized_error');
const { BadRequestError } = require('../../errors/bad_request_error');
const { sendmail } = require('../../utils/sendmail');

const signup = async (req, res) => {
    if(!req.currentUser?.admin) {
        throw new NotAuthorizedError("Not authorized");
    }
    const { email, name, phone, designation, entity } = req.body;
    const user = await admins.findOne({
        where: { email }
    });
    if (user) {
        throw new BadRequestError('User already exists');
    }
    const password = crypto.randomBytes(4).toString('hex');
    const password_hash = await bcrypt.hash(password, 10);
    const newAdmin = await admins.create({
        email,
        name,
        phone,
        designation,
        password_hash,
        entity_id: entity
    });
    const adminEntity = await newAdmin.getEntity();
    const payload = {
        admin: {
            id: newAdmin.id,
            email: newAdmin.email,
            name: newAdmin.name,
            phone: newAdmin.phone,
            designation: newAdmin.designation,
            entity: {
                id: adminEntity.id,
                name: adminEntity.name,
                type: adminEntity.type
            }
        }
    }
    res.status(201).json(payload);
    sendmail(email, "Welcome to the team", `Your password is ${ password }`);
}

module.exports = {
    signup
}