import express, { IRouter } from "express";
import { signup } from "../controllers/serviceProviderControls";
import { signupMiddleware } from "../middlewares/signupDetails";

const router: IRouter = express.Router()
    router.post('/user/signup', signupMiddleware ,signup)
export default router