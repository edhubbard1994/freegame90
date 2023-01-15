import { calculateData, Calculations, Property } from '@/calculator/Calculate'
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Calculations>) {

    if (req.method === "POST") {
        const calculated = calculateData(req.body)
        res.status(200).json(calculated)
    }
}


