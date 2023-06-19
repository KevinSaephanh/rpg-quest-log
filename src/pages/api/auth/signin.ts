import { NextApiRequest, NextApiResponse } from 'next';
import { signin } from 'src/lib/utils/users';

export default async function signinHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const user = await signin(req.body);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
