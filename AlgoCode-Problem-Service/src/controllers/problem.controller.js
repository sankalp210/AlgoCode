import NotImplementedError from "../errors/notimplemented.error.js";

export function addProblem(req,res,next){
    try {
        throw new NotImplementedError('addProblem');
    } catch (error) {
        next(error);
    }
}

export function getProblem(req,res){

}

export function getAllProblems(req,res){

}

export function deleteProblem(req,res){

}

export function updateProblem(req,res){

}