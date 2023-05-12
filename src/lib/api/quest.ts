import clientPromise from '../mongodb';

export interface QuestProps {
  name: string;
  description: string;
  objectives: QuestObjective[];
  createdDate: Date;
  completedDate: Date;
}

export interface QuestObjective {
  name: string;
  currentCount: number | null;
  maxCount: number | null;
  isComplete: boolean;
}

export interface CreateQuestDto {
  name: string;
  description: string;
  objectives: QuestObjective[];
}

export async function createQuest({ name, description, objectives }: CreateQuestDto) {}

export async function getAllQuests(): Promise<QuestProps | null> {
  const client = await clientPromise;
  const collection = client.db(process.env.MONGODB_NAME).collection('quests');
  return await collection.find();
}

export async function updateQuest(name: string, placeholder: string) {
  const client = await clientPromise;
  const collection = client.db('test').collection('quests');
  return await collection.updateOne({ name }, { $set: { placeholder } });
}
