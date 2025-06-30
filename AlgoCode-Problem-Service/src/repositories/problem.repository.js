import NotFound from "../errors/notfound.error.js";
import { Problem } from "../schema/problem.schema.js";

class ProblemRepository{
    
    async createProblem(problemData){
        try {
             const problem = await Problem.create({
            title : problemData.title,
            description : problemData.description
        });
        return problem
        } catch (error) {
            console.log(error);
            throw error;            
        }
    }

    async getProblem(problemId){
        try {
            const problem = await Problem.findById(problemId);
            if(!problem){
                throw new NotFound("problem",problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems
        } catch (error){
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemId){
        try {
            const deletedProblem = await Problem.findByIdAndDelete(problemId);
            if(!deletedProblem) {
                throw new NotFound("problem", problemId);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default ProblemRepository;
