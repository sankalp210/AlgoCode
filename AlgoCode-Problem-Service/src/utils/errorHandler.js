import { StatusCodes } from "http-status-codes";
import BaseError from "../errors/base.error.js";
import logger from "../config/logger.config.js";

function errorHandler(err,req,res,next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {}
        })
    }

    logger.error(`[${req.method}] ${req.originalUrl} - ${err.message}\n${err.stack}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message: "something went wrong",
        error : err,
        data : {}
    })
}

export default errorHandler;