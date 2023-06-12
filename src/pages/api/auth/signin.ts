import { NextApiRequest, NextApiResponse } from 'next';
import { signin } from 'src/lib/utils/users';

export default async function signinHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await signin({ email, password });
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
