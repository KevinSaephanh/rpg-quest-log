import { NextApiRequest, NextApiResponse } from 'next';
import { createQuest } from 'src/lib/utils/quests';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { userId, ...body } = req.body;
    const quest = await createQuest(userId, body);
    res.status(200).json({ quest });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
