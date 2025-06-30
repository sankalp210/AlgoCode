import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error.js";

class NotFound extends BaseError{
    constructor(resourceName,resorceValue){
        super("Not Found",StatusCodes.NOT_FOUND,`the requested ${resourceName} with value ${resorceValue} is not found`,{
            resourceName,
            resorceValue
        })
    }
}

export default NotFound;