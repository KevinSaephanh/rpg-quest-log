import { compare, compareSync, hashSync } from 'bcrypt';
import { getCollection } from '../get-collection';

export interface UserProps {
  email: string;
  username: string;
  password: string;
  createdDate: Date;
}

export interface SignupDto {
  email: string;
  username: string;
  password: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export async function signup({ email, username, password }: SignupDto) {
  const collection = await getCollection('users');
  const userWithEmail = await collection.findOne({ email });
  const userWithUsername = await collection.findOne({ username });

  if (userWithEmail || userWithUsername) {
    throw new Error(`Email and/or username is in use`);
  }

  const hashedPassword = hashSync(password, 12);
  const user = await collection.insertOne({ email, username, password: hashedPassword });

  return { id: user.insertedId, email, username };
}

export async function login({ username, password }: LoginDto) {
  const collection = await getCollection('users');
  const user = await collection.findOne({ username });

  if (!user || !compareSync(password, user.password)) {
    throw new Error('Username and/or password does not match');
  }

  const { password: userPassword, ...partialUser } = user;
  const token = 'placeholder123';
  return {
    token,
    user: partialUser,
  };
}

export async function getUser(username: string) {
  const collection = await getCollection('users');
  return await collection.findOne<UserProps>({ username });
}

export async function updateUser(id: string, username: string, password?: string) {
  const collection = await getCollection('users');
  const updateObj = { username };

  if (password) {
    const hashedPassword = hashSync(password, 12);
    Object.assign(password, hashedPassword);
  }

  return await collection.updateOne({ id }, { $set: updateObj });
}

export async function updateEmail(id: string, email: string) {
  const collection = await getCollection('users');
  return await collection.updateOne({ id }, { $set: { email } });
}
