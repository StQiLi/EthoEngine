const express = require('express');
const router = express.Router();
const { validateAccessTokenAndGetUser } = require('../services/authService');

const authMiddleware = async (req, res, next) => {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    try {
        const user = await validateAccessTokenAndGetUser(authorizationHeader);
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send(`Unauthorized: ${err.message}`);
    }
};

router.get('/whoami', authMiddleware, (req, res) => {
    res.send({ user_id: req.user.userId });
});

module.exports = router;
