// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Users from '../models/users.model'
import getJWT from '../utils/getJWT'

interface JwtPayload{
    email:string,
    name:string
}

type Data = {
  message: string
}

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method==='POST'){
        const email=req.body.email
        const password=req.body.password
        console.log(email)

        try {
            const user=await Users.findOne({where:{email:email}})
            if(!user){
                res.json({message:"User not present"})
            }else if(user.password===password){
                const payload:JwtPayload={
                    email:email,
                    name:user.name
                }
                const data=await getJWT(payload)
                res.json({message:data});
            } else{
                res.json({message:"Wrong password"})

            }
        } catch (e) {
            console.error(e);
            res.json({message:"not ok"});
        }
    } else{
        res.json({message:'GET'})
    }
}
