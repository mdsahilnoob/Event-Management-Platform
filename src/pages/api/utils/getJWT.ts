import jwt from 'jsonwebtoken'

interface JwtPayload{
    email:string,
    name:string
}

const getJWT=async (payload:JwtPayload)=>{
    const expiresIn='1h'
    const token = jwt.sign(payload, "secret hai bro", { expiresIn })
    return token
}

export default getJWT