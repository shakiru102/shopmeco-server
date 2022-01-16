import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
// import Provider from "../models/serviceProviderModel";
// import { serviceProviderDetails } from "../types/interface";
import { verifytoken } from "../utils/jsontoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  
    const authHeader: any = req.headers["Authorization"]
    try {
        const token: string = authHeader.replace('Bearer', '')
        const validToken: JwtPayload =  verifytoken(token)
        if(!validToken) throw new Error('Unauthorized')
        //@ts-ignore
        req.token = validToken
        next()

    } catch (error: any) {
        res.status(400).send(error.message)
    }

 
}