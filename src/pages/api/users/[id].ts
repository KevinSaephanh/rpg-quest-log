import { NextApiRequest, NextApiResponse } from 'next';
import { findUserById } from 'src/lib/utils/users';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { id } = req.query;
    const user = await findUserById(id as string);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
