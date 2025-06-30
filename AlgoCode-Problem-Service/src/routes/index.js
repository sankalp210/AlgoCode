import express from 'express';
import problemRouter from '../routes/v1/index.js'

const app = express();

app.use('/v1',problemRouter);

export default app;