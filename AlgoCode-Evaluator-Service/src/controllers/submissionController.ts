import { Request, Response } from 'express';

import { CreateSubmissionDto } from '../dtos/createSubmissionDto';

export const addSubmission = async (req: Request, res: Response) => {
  const submissionDto = req.body as CreateSubmissionDto;
  console.log('Received submission:', submissionDto);
  // Here you would typically add the submission to a database or a queue
  // For now, we will just return a success response
  res.status(201).json({
    success: true,
    message: 'Submission added successfully',
    data: submissionDto,
    error: {},
  });
};
