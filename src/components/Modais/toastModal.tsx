/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../providers/ModaisContext/toastModalContext';
import { AiOutlineClose } from 'react-icons/ai';
import { StyleModal } from './styles';
import { useRef, useEffect } from 'react';



const Modal = () => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutclick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        window.addEventListener("mousedown", handleOutclick);

        return () => {
            window.removeEventListener("mousedown", handleOutclick);
        };
    }, []);

    const { isModalOpen, closeModal, modalButton, modalMessage, modalTitle, modalDescription } = useModal();
    const navigate = useNavigate()

    if (!isModalOpen) {
        return null;
    }

    return (
        <StyleModal>
            <div ref={modalRef}>
                <h2>{modalTitle}</h2>
                <h2>{modalMessage}</h2>
                <p>{modalDescription}</p>
                {modalButton !== "null" ? <button onClick={() => {
                    if (modalButton == 'Ir para o incio') {
                        navigate('/')
                    } else if (modalButton == 'Fazer cadastro') {
                        navigate('/register')
                    } else if (modalButton == 'Ir para o login') {
                        navigate('/login')
                    }
                }}>{modalButton}</button> : null}
                <button className="modal-close-button" onClick={closeModal}>
                    <AiOutlineClose />
                </button>
            </div>
        </StyleModal>
    );
};

export default Modal;

