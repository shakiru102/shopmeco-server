import { Request, Response } from "express";
import Provider from "../models/serviceProviderModel";
import { serviceProviderDetails } from "../types/interface";
import { comparePassword } from "../utils/bcrypt";
import { authtoken } from "../utils/jsontoken";

//@ts-ignore
export const signup = async (req: Request, res: Response) => res.send(req.provider)

export const authProvider = async (req: Request, res: Response) => {
            //@ts-ignore
    const provider: serviceProviderDetails = await Provider.findById({_id: req.token.id})
    const { email, phonenumber, companyname, fullname, service, id } = provider
    res.status(200).json({ email, phonenumber, companyname, fullname, service, id })
}

export const login = async (req: Request, res: Response) => {
    try {
     const {  email, password }: serviceProviderDetails = req.body
     const verifyEmail = await Provider.findOne({ email })
     if(!verifyEmail) throw new Error ('Inavlid email address')
     const verifyPassword = await comparePassword(password, verifyEmail.password)
     if(!verifyPassword) throw new Error('Password is invalid')
     const token = authtoken(verifyEmail.id)
     res.status(200).send(token)

        
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}