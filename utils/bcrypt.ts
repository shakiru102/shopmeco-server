import bcrypt from "bcrypt";

export const securedPassword = async (pass: string): Promise<string> => {
    const salt = await bcrypt.genSalt()
    return await bcrypt.hash(pass, salt)
}
export const comparePassword = async (pass: string, hashpass: string): Promise<boolean> => await bcrypt.compare(pass, hashpass)