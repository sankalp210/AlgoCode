import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error.js";

class NotImplementedError extends BaseError{
    constructor(propertyName){
        super("Not Implemented",StatusCodes.NOT_IMPLEMENTED,`${propertyName} is not implemented yet`,{});
    }
}

export default NotImplementedError;