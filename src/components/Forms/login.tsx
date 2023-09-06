/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Input } from "../Input";
import { api } from '../../services/api';
import { formLoginSchema } from "../../schemas/login.schema"
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../providers/ModaisContext/toastModalContext';
import Modal from '../Modais/toastModal';
import RecoverPasswordModal from '../Modais/recoverPasswordModal';

interface FormErrors {
  email?: string;
  password?: string;
}

interface FormLoginProps {
  onLoginSuccess: (isSeller: boolean) => void;
}

export const FormLogin: React.FC<FormLoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate()
  const [recoverModal, setRecoverModal] = useState(false)
  const { openModal } = useModal();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const transformEmptyToNull = (data: any) => {
    const transformedData = { ...data };
    for (const key in transformedData) {
      if (typeof transformedData[key] === 'string' && transformedData[key].trim() === '') {
        transformedData[key] = null;
      }
    }
    return transformedData;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      formLoginSchema.parse(formData);
      const transformedData = transformEmptyToNull(formData);
      const response = await api.post("/login", transformedData);
      const { token } = response.data;
      localStorage.setItem("Token", token);

      if (response.data) {
        const isSeller = response.data.is_seller;
        onLoginSuccess(isSeller);
        if (isSeller) {
          openModal('Sucesso!', 'Sua conta de vendedor foi logada  com sucesso!',
            'Agora você poderá ver seus negócios crescendo em grande escala',
            'null')
          setTimeout(() => navigate("/seller-dashboard"), 4000);
        } else {
          openModal('Sucesso!',
            'Sua conta foi logada com sucesso!',
            'Agora você poderá ver seus negócios crescendo em grande escala',
            'Ir para o incio')
          setTimeout(() => navigate("/"), 4000);
        }
      } else {
        openModal('Falha!', 'Falha ao realizar o login, revise os dados e tente novamente!', 'Verifique suas credenciais e tente novamente.', 'Fazer cadastro')
      }
    } catch (error: any) {
      setFormErrors(error.formErrors?.fieldErrors || {});
      openModal('Falha!', 'Falha ao realizar o login, revise os dados e tente novamente!', 'Verifique suas credenciais e tente novamente.', 'Fazer cadastro')
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <Input
          label="Email"
          type="text"
          placeholder="Digite seu email aqui..."
          name="email" value={formData.email}
          onChange={handleChange} />
        <p className="error">{formErrors['email']}</p>

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha aqui..."
          name="password" value={formData.password}
          onChange={handleChange} />
        <p className="error">{formErrors['password']}</p>

        <button type='button' className='button-recover-pass' onClick={() => setRecoverModal(true)}><h2>Esqueci minha senha</h2></button>
        <button className="hover:bg-brand-brand-1
        hover:bg-opacity-90"
          type="submit">Entrar</button>

        <Modal />
      </form>
      <RecoverPasswordModal setRecoverModal={setRecoverModal} recoverModal={recoverModal} />
    </>
  )
}



/* 
export const FormLogin: React.FC<FormLoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const transformEmptyToNull = (data: any) => {
    const transformedData = { ...data };
    for (const key in transformedData) {
      if (
        typeof transformedData[key] === "string" &&
        transformedData[key].trim() === ""
      ) {
        transformedData[key] = null;
      }
    }
    return transformedData;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      formLoginSchema.parse(formData);
      console.log("Formulário válido");
      const transformedData = transformEmptyToNull(formData);
      const response = await api.post("/login", transformedData);
      const { token, user_id } = response.data;
      localStorage.setItem("Token", token);
      localStorage.setItem("user_id", user_id);

      if (response.data) {
        const isSeller = response.data.is_seller;
        onLoginSuccess(isSeller);
        console.log(isSeller);
        if (isSeller) {
            openModal('Sucesso!', 'Sua conta de vendedor foi logada  com sucesso!', 
            'Agora você poderá ver seus negócios crescendo em grande escala', 
            'Ir para o incio')
          setTimeout(() => navigate("/seller-dashboard"), 4000);
        } else {
            openModal('Sucesso!', 
            'Sua conta foi logada com sucesso!', 
            'Agora você poderá ver seus negócios crescendo em grande escala', 
            'Ir para o incio')
          setTimeout(() => navigate("/"), 4000);
        }
      } else {
        openModal('Falha!', 'Falha ao realizar o login, revise os dados e tente novamente!', 'Verifique suas credenciais e tente novamente.', 'Fazer cadastro')
      }
    } catch (error: any) {
      setFormErrors(error.formErrors?.fieldErrors || {});
      openModal('Falha!', 'Falha ao realizar o login, revise os dados e tente novamente!', 'Verifique suas credenciais e tente novamente.', 'Fazer cadastro')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        type="text"
        placeholder="Digite seu email aqui..."
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <p className="error">{formErrors["email"]}</p>

      <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha aqui..."
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <p className="error">{formErrors["password"]}</p>

      <h2>Esqueci minha senha</h2>

      <button
        className="hover:bg-brand-brand-1
             hover:bg-opacity-90"
        type="submit"
      >
        Entrar
      </button>

    </form>
  );
};
>>>>>>> eeffd62b57ede3f1dded1b4d2890cfd7de052839
 */