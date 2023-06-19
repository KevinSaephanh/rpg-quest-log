import { NextApiRequest, NextApiResponse } from 'next';
import { signup } from 'src/lib/utils/users';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { email, username, password } = req.body;
    const user = await signup({ email, username, password });
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: error });
  }
}
