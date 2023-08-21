// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connection from './utils/Connection'

type Data = {
  message: string
}

export default function Connect(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    connection
    .authenticate()
    .then(() => {
      console.log("Connected to Payroll DB and listening to port 3000");
    })
    .catch((error:any) => {
      console.log(error);
    });
  res.status(200).json({ message: 'Database connected' })
}
