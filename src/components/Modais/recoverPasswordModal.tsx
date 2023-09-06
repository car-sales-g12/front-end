/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../providers/ModaisContext/toastModalContext';
import { Input } from '../Input';
import React, { useEffect, useRef, useState } from 'react';
import { api } from '../../services/api';
import { z } from "zod";
import { AiOutlineClose } from 'react-icons/ai';
import { StyleRecoverPasswordModal } from './styles';

interface FormErrors {
    email?: string;
}
const formEmailSchema = z.object({
    email: z.string().nonempty("E-mail é obrigatorio").email("Forneça um e-mail válido").max(250, "O email pode ter no máximo 250 caracteres"),
})

export type dataEmail = z.infer<typeof formEmailSchema>

type TRecoverPasswordProps = {
    setRecoverModal: React.Dispatch<React.SetStateAction<boolean>>
    recoverModal: boolean
}

const RecoverPasswordModal = ({ setRecoverModal, recoverModal }: TRecoverPasswordProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutclick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setRecoverModal(false)
            }
        };

        window.addEventListener("mousedown", handleOutclick);

        return () => {
            window.removeEventListener("mousedown", handleOutclick);
        };
    }, []);
    
    const navigate = useNavigate()
    const { openModal } = useModal();

    const [formData, setFormData] = useState({
        email: '',
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        try {
            formEmailSchema.parse(formData);
            await api.post("/user/resetPassword", formData);

            setRecoverModal(false)
            openModal('Sucesso!',
                'Email confirmado com sucesso!',
                'Enviamos o passo a passo para redefinir sua senha, basta ir no seu email!!',
                'Ir para o incio')
        } catch (error: any) {
            setFormErrors(error.formErrors?.fieldErrors || {});
            openModal('Falha!',
                'Falha ao confirmar email, revise os dados e tente novamente!',
                'Verifique suas credenciais e tente novamente.',
                'Ir para o incio')
        }
    };

    return (
        <>{recoverModal ? <StyleRecoverPasswordModal>
            <div ref={modalRef}>
                <h1>Recuperar senha</h1>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <Input
                        label="Email"
                        type="text"
                        placeholder="Confirme seu email aqui..."
                        name="email" value={formData.email}
                        onChange={handleChange} />
                    <p className="error">{formErrors['email']}</p>
                    <button type="submit">Enviar</button>
                    <button className="modal-close-button" onClick={() => setRecoverModal(false)}>
                    <AiOutlineClose />
                </button>
                </form>

                <button type='button' onClick={() => navigate('/')}>Voltar ao inicio</button>
                
            </div>
        </StyleRecoverPasswordModal> : null}
        </>
    );
};

export default RecoverPasswordModal;

