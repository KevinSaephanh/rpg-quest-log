import prisma from './prisma-client';

export interface CreateQuestDto {
  userId: string;
  name: string;
  description: string;
  objectives: QuestObjective[];
  sideQuest?: boolean;
}

export interface UpdateQuestDto {
  name: string;
  description: string;
  objectives: QuestObjective[];
  sideQuest?: boolean;
  isComplete: boolean;
}

export interface QuestObjective {
  name: string;
  currentCount: number | null;
  maxCount: number | null;
  isComplete: boolean;
}

export const createQuest = async ({ objectives, ...partialQuest }: CreateQuestDto) => {
  const quest = await prisma.quest.create({
    data: { ...partialQuest, objectives },
  });
  return quest;
};

export const findUserQuests = async (userId: string) => {
  return await prisma.quest.findMany({
    where: { userId },
  });
};

export const findQuestById = async (id: string) => {
  return await prisma.quest.findUniqueOrThrow({ where: { id } });
};

export const updateQuest = async (
  id: string,
  { isComplete, ...updateQuestDto }: UpdateQuestDto
) => {
  const quest = await findQuestById(id);
  // TODO: validate objectives before update
};
