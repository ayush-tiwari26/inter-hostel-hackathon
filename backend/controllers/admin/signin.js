const { admins, entities } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../../errors/not_authorized_error');
const signin = async (req, res) => {

    const { email, password } = req.body;
    const user = await admins.findOne({
        where: { email },
        include: [entities]
    });
    if (!user) {
        throw new NotAuthorizedError('Invalid username');
    }
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
        throw new NotAuthorizedError('Invalid password');
    }
    const payload = {
        admin: {
            id: user.id,
            email: user.email,
            name: user.name,
            phone: user.phone,
            designation: user.designation,
            entity: {
                id: user.entity.id,
                name: user.entity.name,
                type: user.entity.type
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