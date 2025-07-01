// src/routes/v1/index.ts
import express from 'express';

import { pingController } from '../../controllers/pingController';

const v1Router = express.Router(); // ✅ correct

v1Router.get('/ping', pingController);

export default v1Router;
