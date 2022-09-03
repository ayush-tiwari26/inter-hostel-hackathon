const { Router } = require('express');
const router = Router();


router.post('/signin', async (req, res) => {
    res.send('Admin Signin');
})

router.post('/signup', async (req, res) => {
    res.send('Admin Signup');
})

module.exports = { router };