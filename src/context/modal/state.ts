import React from 'react';

export interface ModalState {
  modalTitle: string;
  modalContent: React.ReactNode;
  openModal: (title: string, content: React.ReactNode) => void;
  closeModal: () => void;
}

export const initialState: ModalState = {
  modalTitle: '',
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
};
