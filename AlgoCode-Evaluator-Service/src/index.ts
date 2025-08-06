import bodyParser from 'body-parser';
import express from 'express';

import config from './config/server.config.js';
import apiRouter from './routes/index.js';
import { submission_queue } from './utils/constants.js';
import SubmissionWorker from './workers/submissionWorker.js';

const { PORT } = config;
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/api', apiRouter);

app.listen(PORT, async () => {
  console.log(`✅ Server is running on port ${PORT}`);

  SubmissionWorker(submission_queue);
});
