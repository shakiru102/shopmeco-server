import express, { IRouter } from "express";
import { authProvider, login, signup } from "../controllers/serviceProviderControls";
import { auth } from "../middlewares/auth";
import { signupMiddleware } from "../middlewares/signupDetails";

const router: IRouter = express.Router()
    router.post('/provider/signup', signupMiddleware ,signup)
    router.get('/provider', auth, authProvider)
    router.post('/provider/login', login)
export default router