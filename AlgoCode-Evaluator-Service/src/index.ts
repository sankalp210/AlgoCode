import express from 'express';
import config from './config/server.config.js';
import apiRouter from './routes/index.js';


const { PORT } = config;

const app = express();

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

 
});
