import { compareSync, hashSync } from 'bcrypt';
import { prisma } from './prisma-client';

export interface SignupDto {
  email: string;
  username: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export const signup = async ({ email, username, password }: SignupDto) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (existingUser) {
    throw new Error(`User with email and/or username already exists!`);
  }

  const hashedPassword = hashSync(password, 12);
  const user = await prisma.user.create({
    data: { email, username, password: hashedPassword },
  });
  return user;
};

export const signin = async ({ email, password }: LoginDto) => {
  try {
    const { password: userPassword, ...user } = await prisma.user.findUniqueOrThrow({
      where: { email },
    });

    if (!compareSync(password, userPassword)) throw new Error(`Passwords do not match!`);

    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const findAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error(error as string);
  }
};

export const findUserById = async (id: string) => {
  try {
    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) throw new Error(`User not found!`);

    return user;
  } catch (error) {
    throw new Error(error as string);
  }
};
