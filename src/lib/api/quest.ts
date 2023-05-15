import { getCollection } from '../get-collection';

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

export async function createQuest({ name, description, objectives }: CreateQuestDto) {
  const collection = await getCollection('quests');
}

export async function getAllQuests() {
  const collection = await getCollection('quests');
  // return await collection.aggregate().toArray();
}

export async function updateQuest(name: string, placeholder: string) {
  const collection = await getCollection('quests');
  return await collection.updateOne({ name }, { $set: { placeholder } });
}
