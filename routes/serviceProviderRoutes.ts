import express, { IRouter } from "express";
import { authProvider, login, signup } from "../controllers/serviceProviderControls";
import { auth } from "../middlewares/auth";
import { signupMiddleware } from "../middlewares/signupDetails";

const router: IRouter = express.Router()
    router.post('/user/signup', signupMiddleware ,signup)
    router.get('/user', auth, authProvider)
    router.post('/user/login', login)
export default router