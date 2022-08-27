import { NextApiRequest, NextApiResponse } from "next";
import { addEntry } from "../../controllers/RSVPController";


export default async function rsvpRoute(req: NextApiRequest, res: NextApiResponse<{ success: boolean, message: string }>) {
    if (req.method === 'POST') {
        const { pname, email, en_selected, hn_selected, mt_selected, toDelete } = req.body
        const result = await addEntry({ pname, email, en_selected, hn_selected, mt_selected, toDelete })
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