import { NextFunction, Request, Response } from "express";
import { serviceProviderDetails } from "../types/interface";
import { providerValidation } from "../utils/joi";
import { securedPassword } from "../utils/bcrypt";
import  Provider  from "../models/serviceProviderModel";
import { authtoken } from "../utils/jsontoken";

 
export const signupMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password }: serviceProviderDetails = req.body
        const { error } =  providerValidation(req.body)
        if(error) throw new Error(error.details[0].message)
        const hashpass: string = await securedPassword(password)
        const provider = await Provider.create({ ...req.body, password: hashpass })
        const token = authtoken(provider.id)
        // @ts-ignore
        req.provider = token
        next()

    } catch (err: any) {
        res.status(400).send(err.message)
    }
    
}