import { NextApiRequest, NextApiResponse } from "next";
import { IParticipant } from "../../common/IParticipant";
import { getRegistrations } from "../../controllers/RegistrationsController";

export default async function regisRoute(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; registrations: IParticipant[] }>
) {
  if (req.method === "GET" && req.query.token === process.env.TOKEN) {
    const registrations = await getRegistrations();
    res.status(200).json({ success: true, registrations });
  } else {
    res.status(405).json({ success: false, registrations: [] });
  }
}
