import { Quest } from '@prisma/client';

export interface QuestState {
  quests: Quest[];
  addQuest: (quest: Quest) => void;
  removeQuest: (id: string) => void;
}

export const initialState: QuestState = {
  quests: [],
  addQuest: () => {},
  removeQuest: () => {},
};
