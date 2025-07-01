import express from 'express';

import config from './config/server.config.js';

const { PORT } = config;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
