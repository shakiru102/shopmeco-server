import { Request, Response } from "express";
// import { serviceProviderDetails } from "../types/interface";

//@ts-ignore
export const signup = async (req: Request, res: Response) => res.send(req.provider)