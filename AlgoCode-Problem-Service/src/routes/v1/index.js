import express from 'express'
import problemRouter from './problems.js';

const v1Router = express();

v1Router.use('/problems',problemRouter);

export default v1Router;