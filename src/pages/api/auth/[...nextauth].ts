import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { signin } from 'src/lib/utils/users';
import prisma from 'src/lib/utils/prisma-client';
import { NextApiRequest, NextApiResponse } from 'next';

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {
            label: 'Email',
            type: 'email',
          },
          password: {
            label: 'Password',
            type: 'password',
          },
        },
        async authorize(credentials) {
          if (!credentials) throw new Error(`Credentials not provided!`);
          return await signin(credentials);
        },
      }),
    ],
    pages: {
      signIn: '/signin',
    },
    session: {
      maxAge: 60 * 60,
    },
    secret: process.env.SESSION_SECRET,
  });
};

export default authHandler;
