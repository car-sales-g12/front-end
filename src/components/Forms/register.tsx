/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { formRegisterSchema } from "../../schemas/register.schema";
import { Input } from "../Input";
import { api } from '../../services/api';
import { FormRegisterAddress } from './address';
import { formAddressSchema } from "../../schemas/address.schema"
import { StyledButton } from '../../pages/Register/style';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../providers/ModaisContext/toastModalContext';
import Modal from '../Modais/toastModal';

interface ButtonProps {
    active: string;
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ active, onClick, children }) => {
    return (
        <StyledButton type="button" active={active} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

interface FormErrors {
    name?: string;
    email?: string;
    cpf?: string;
    telephone?: string;
    birth_date?: string;
    description?: string;
    password?: string;
    confirmPassword?: string;
}

export interface FormAddressErrors {
    zip_code?: string;
    street?: string;
    number?: string;
    complement?: string;
    state?: string;
    city?: string;
}

export const FormRegister = () => {
    const { openModal } = useModal();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cpf: '',
        telephone: '',
        birth_date: '',
        description: '',
        is_seller: false,
        password: '',
        confirmPassword: ''
    });

    const [formDataAddress, setFormDataAddress] = useState({
        zip_code: '',
        street: '',
        number: '',
        complement: '',
        state: '',
        city: ''
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const [formErrorsAddress, setFormErrorsAddress] = useState<FormAddressErrors>({});

    const [isSeller, setIsSeller] = useState(false);

    const toggleIsSeller = () => {
        setIsSeller(true);
        setFormData({
            ...formData,
            is_seller: isSeller
        });
    };

    const toggleIsNotSeller = () => {
        setIsSeller(false);
        setFormData({
            ...formData,
            is_seller: isSeller
        });
    };

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
            formRegisterSchema.parse(formData);
            formAddressSchema.parse(formDataAddress);
            const response = await api.post('/user', formData)
            await api.post(`/address/${response.data.id}`, formDataAddress)

            openModal('Sucesso!', 'Sua conta foi criada com sucesso!', 'Agora você poderá ver seus negócios crescendo em grande escala', 'Ir para o login')
            setTimeout(() => navigate('/login'), 4000)
        } catch (error: any) {
            openModal('Falha!', 'Falha ao realizar o cadastro, revise os dados e tente novamente!', 'Verifique suas credenciais e tente novamente.', 'Ir para o incio')
            setFormErrors(error.formErrors?.fieldErrors || {})
            setFormErrorsAddress(error.formErrorsAddress?.fieldErrors || {});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Informações pessoais</h3>
            <Input
                label="Nome"
                type="text"
                placeholder="Digite seu nome aqui..."
                name="name" value={formData.name}
                onChange={handleChange} />
            <p className="error">{formErrors['name']}</p>

            <Input
                label="Email"
                type="text"
                placeholder="Digite seu email aqui..."
                name="email" value={formData.email}
                onChange={handleChange} />
            <p className="error">{formErrors['email']}</p>

            <Input
                label="CPF" type="text"
                placeholder="Digite seu CPF aqui..."
                name="cpf" value={formData.cpf}
                onChange={handleChange} />
            <p className="error">{formErrors['cpf']}</p>

            <Input
                label="Telefone"
                type="text"
                placeholder="Digite seu celular aqui..."
                name="telephone" value={formData.telephone}
                onChange={handleChange} />
            <p className="error">{formErrors['telephone']}</p>

            <Input
                label="Data de Nascimento"
                type="text"
                placeholder="Digite sua data de nascimento aqui..."
                name="birth_date" value={formData.birth_date}
                onChange={handleChange} />
            <p className="error">{formErrors['birth_date']}</p>

            <Input
                label="Descrição"
                type="text"
                placeholder="Digite sua descrição aqui..."
                name="description" value={formData.description}
                onChange={handleChange} />
            <p className="error">{formErrors['description']}</p>

            <h3>Informações de endereço</h3>

            <FormRegisterAddress formDataAddress={formDataAddress} setFormDataAddress={setFormDataAddress} formErrorsAddress={formErrorsAddress} />

            <h3>Tipo de conta</h3>

            <div className='div-is-seller'>
                <Button onClick={toggleIsNotSeller} active={`${!isSeller}`} >Comprador</Button>
                <Button onClick={toggleIsSeller} active={`${isSeller}`} >Anunciante</Button>
            </div>


            <Input
                label="Senha"
                type="password"
                placeholder="Digite sua senha aqui..."
                name="password" value={formData.password}
                onChange={handleChange} />
            <p className="error">{formErrors['password']}</p>

            <Input
                label="Confirmar Senha"
                type="password"
                placeholder="Confirme sua senha aqui..."
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange} />
            <p className="error">{formErrors['confirmPassword']}</p>

            <button type='submit'>Finalizar cadastro</button>
            <Modal/>
        </form>
    )
}