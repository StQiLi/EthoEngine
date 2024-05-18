const { initBaseAuth } = require('@propelauth/node');
require('dotenv').config();

const authUrl = process.env.AUTH_URL;
const apiKey = process.env.API_KEY;

const {
    validateAccessTokenAndGetUser,
    fetchUserMetadataByUserId,
} = initBaseAuth({
    authUrl,
    apiKey,
});

module.exports = {
    validateAccessTokenAndGetUser,
    fetchUserMetadataByUserId,
};