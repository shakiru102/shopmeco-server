import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv";
import serviceProviderRoutes from "./routes/serviceProviderRoutes"
env.config()

const MongooseOptions: object = {
    useUnifiedTopology: true,
}

const Port = process.env.PORT || 5000
const app: Express = express()
const URI: string = `${ process.env.MONGO_URI }`
mongoose.connect( URI, MongooseOptions )
.then(() => app.listen(Port))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', serviceProviderRoutes )

app.get('/', ( req: Request, res: Response ) => res.send('Server is runing on Port ' + Port))

