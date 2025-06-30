import { StatusCodes } from "http-status-codes";
import BaseError from "./base.error";

class InternalServerError extends BaseError{
    constructor(details){
        super("Internal Server Error",StatusCodes.INTERNAL_SERVER_ERROR,'something went wrong',details)
    }
}

export default InternalServerError;