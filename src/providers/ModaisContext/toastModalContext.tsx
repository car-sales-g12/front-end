/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react';

interface ModalContextType {
    openModal: (title: string, message: string, description: string, button: string) => void;
    closeModal: () => void;
    isModalOpen: boolean;
    modalTitle: string;
    modalMessage: string;
    modalDescription: string;
    modalButton: string;
}

interface ModalProviderProps {
    children: ReactNode
}

const ModalContext = createContext({} as ModalContextType);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal deve ser usado dentro do ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const [modalButton, setModalButton] = useState('');

    const openModal = (title: string, message: string, description: string, button: string) => {
        setModalTitle(title);
        setModalMessage(message);
        setModalDescription(description);
        setModalButton(button);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const contextValue: ModalContextType = {
        openModal,
        closeModal,
        isModalOpen,
        modalTitle,
        modalMessage,
        modalDescription,
        modalButton
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    );
};