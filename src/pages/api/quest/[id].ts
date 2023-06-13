import { NextApiRequest, NextApiResponse } from 'next';

export default async function getByIdHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { id } = req.query;
    const quest = await Promise.resolve();
    res.status(200).json({ quest });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
