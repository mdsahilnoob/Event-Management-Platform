// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import College from '../models/college.model'
import getDate from '../utils/GetDate'


type Data = {
  message: string
}

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method==='POST'){
        const pincode=req.body.pincode
        const address=req.body.address
        const emailDomain=req.body.emailDomain
        const email=req.body.email
        const name=req.body.name
        const contact=req.body.contact
        const date=new Date()
        console.log(date.toISOString().split('T')[0])
        try{

          const college = await College.create({
            name: name,
            email:email,
            emailDomain:emailDomain,
            address:address,
            pincode:pincode,
            contact:contact,
            status:'Pending',
            dateOfJoining:new Date()
          })
          
          // await college.save()
        } catch(e){
          console.error(e)
        }

        res.status(200).json({ message: 'post' })
    } else{
        res.json({message:'get'})
    }
}
