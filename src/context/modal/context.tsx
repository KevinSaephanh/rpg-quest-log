import React from 'react';
import { ModalState, initialState } from './state';

export const ModalContext = React.createContext<ModalState>(initialState);

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalTitle, setModalTitle] = React.useState('');
  const [modalContent, setModalContent] = React.useState<React.ReactNode>(null);
  const [modalError, setModalError] = React.useState('');

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
  };

  const closeModal = () => {
    setModalTitle('');
    setModalContent(null);
    setModalError('');
  };

  const value: ModalState = {
    modalTitle,
    modalContent,
    modalError,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
