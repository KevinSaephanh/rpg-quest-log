import clientPromise from './mongodb';

export async function getCollection(name: string) {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_NAME).collection(name);
}
