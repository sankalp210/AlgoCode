// src/routes/v1/index.ts
import express from 'express';

import { pingController } from '../../controllers/pingController';
import submissionRouter from './submissionRoutes';

const v1Router = express.Router(); // ✅ correct

v1Router.get('/ping', pingController);

v1Router.use('/submissions', submissionRouter);

export default v1Router;
