import { StatusCodes } from "http-status-codes";
import ProblemRepository from "../repositories/problem.repository.js";
import ProblemService from "../services/problem.service.js";

const problemService = new ProblemService(new ProblemRepository)

export async function addProblem(req,res,next){
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
        success : true,
        message: 'Successfully created a new problem',
        error: {},
        data: newProblem
    })
    } catch (error) {
        next(error);
    }
}

export async function getProblem(req,res){
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true,
            message: 'Successfully fetched problem by id',
            error: {},
            data: problem
        })
    } catch (error) {
        next(error);
    }
}

export async function getAllProblems(req,res){
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: problems
        });
    } catch(error){
        next(error);
    }
}

export async function deleteProblem(req,res){
    try {
        const problem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the problems',
            error: {},
            data: problem
        });
    } catch(error){
        next(error);
    }
}

export function updateProblem(req,res){

}