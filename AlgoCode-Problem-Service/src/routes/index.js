import express from 'express';
import v1Router from '../routes/v1/index.js'

const app = express();

app.use('/v1',v1Router);

export default app;