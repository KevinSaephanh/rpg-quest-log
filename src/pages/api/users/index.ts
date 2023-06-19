import { NextApiRequest, NextApiResponse } from 'next';
import { findAllUsers } from 'src/lib/utils/users';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const users = await findAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
