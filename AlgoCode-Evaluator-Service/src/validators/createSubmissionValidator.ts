import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validate = (schema : ZodSchema<any>) => (req : Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            ...req.body
        });
        next();
    } catch (error) {
        console.error("Validation error:", error);
         res.status(400).json({
            success: false,
            message: "Validation error",
            data: {},
            error: error instanceof Error ? error.message : "Unknown validation error"
        });    
    }

}