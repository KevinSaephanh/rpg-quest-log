import { NextApiRequest, NextApiResponse } from 'next';
import { findQuestById } from 'src/lib/utils/quests';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { id } = req.query;
    const quest = await findQuestById(id as string);
    res.status(200).json({ quest });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
