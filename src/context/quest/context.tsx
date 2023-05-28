import React from 'react';
import { QuestState, initialState } from './state';
import { Quest } from '@prisma/client';

export const QuestContext = React.createContext<QuestState>(initialState);

type QuestProviderProps = {
  children: React.ReactNode;
};

export const QuestProvider: React.FC<QuestProviderProps> = ({ children }) => {
  const [quests, setQuests] = React.useState<Quest[]>([]);

  const addQuest = (quest: Quest) => {
    setQuests([...quests, quest]);
  };

  const removeQuest = (id: string) => {
    setQuests(quests.filter((q) => q.id !== id));
  };

  const value: QuestState = {
    quests,
    addQuest,
    removeQuest,
  };

  return <QuestContext.Provider value={value}>{children}</QuestContext.Provider>;
};
