import bcrypt from "bcrypt";

export const securedPassword = async (pass: string) => {
    const salt = await bcrypt.genSalt()
    return await bcrypt.hash(pass, salt)
}