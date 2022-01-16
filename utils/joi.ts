import joi from "joi";
import { serviceProviderDetails } from "../types/interface";

const serviceProviderSchema = joi.object<serviceProviderDetails>({
     fullname: joi.string().required(),
     email: joi.string().required().email(),
     address: joi.string().required(),
     companyname: joi.string(),
     password: joi.string().required().min(8),
     phonenumber: joi.string().required(),
     service: joi.string()
})

export const providerValidation = ({ 
    companyname,
    email,
    password,
    address,
    fullname,
    phonenumber,
    service
 }: serviceProviderDetails) => serviceProviderSchema.validate({
    companyname,
    email,
    password,
    address,
    fullname,
    phonenumber,
    service
})