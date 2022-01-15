import jsontoken from 'jsonwebtoken';

export const authtoken = (id: string) => jsontoken.sign({ id }, `${process.env.JSON_TOKEN}`, { expiresIn: "24hrs" })
