import Redis from 'ioredis';

import serverConfig from './server.config';

const { REDIS_PORT, REDIS_HOST } = serverConfig;

const redisClient = {
  port: REDIS_PORT,
  host: REDIS_HOST,
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisClient);

export default redisConnection;
