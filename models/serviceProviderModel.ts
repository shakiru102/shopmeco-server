import mongoose from "mongoose";
import { serviceProviderDetails } from "../types/interface";

const providerSchema = new mongoose.Schema<serviceProviderDetails>({
    fullname: String,
    email: String,
    address: String,
    companyname: String,
    password: String,
    phonenumber: String,
    service: String,
    date: {
        type: Date,
        default: Date.now()
    }
})

 const Provider = mongoose.model<serviceProviderDetails>('providers', providerSchema)
 export default Provider