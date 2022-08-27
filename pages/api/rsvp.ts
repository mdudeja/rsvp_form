import { NextApiRequest, NextApiResponse } from "next";
import { addEntry } from "../../controllers/RSVPController";


export default async function rsvpRoute(req: NextApiRequest, res: NextApiResponse<{ success: boolean, message: string }>) {
    if (req.method === 'POST') {
        const { email, language, toDelete } = req.body
        const result = await addEntry(email, language, toDelete)
        if (result) {
            res.status(200).json({ success: true, message: 'OK' })
        } else {
            res.status(500).json({ success: false, message: 'Something is wrong' })
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}