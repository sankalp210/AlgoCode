// src/controllers/pingController.ts
import { Request, Response } from 'express';

export const pingController = (_req: Request, res: Response): void => {
  res.status(200).json({ msg: 'pong' });
};
