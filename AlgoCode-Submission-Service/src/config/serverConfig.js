const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT || 3002,
    REDIS_PORT: process.env.REDIS_PORT || "6379",
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    MONGODB_URL : process.env.MONGODB_URL
}