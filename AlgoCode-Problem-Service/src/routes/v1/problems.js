import express from 'express'
import { addProblem, deleteProblem, getAllProblems, getProblem, updateProblem } from '../../controllers/problem.controller.js';

const problemRouter = express();


problemRouter.post('/',addProblem);

problemRouter.get('/:id',getProblem);

problemRouter.get('/',getAllProblems);

problemRouter.delete('/:id',deleteProblem);

problemRouter.put('/:id',updateProblem);

export default problemRouter;