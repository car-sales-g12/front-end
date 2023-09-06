/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Input } from "../Input";
import { api } from '../../services/api';
import { useModal } from '../../providers/ModaisContext/toastModalContext';
import Modal from '../Modais/toastModal';
import { z } from "zod";
import { useParams } from 'react-router-dom';

const formResetPasswordSchema = z.object({
  password: z.string().nonempty("Senha é obrigatória").max(250, "A senha pode ter no máximo 250 caracteres").min(5, "A senha tem que ter no minimo 5 caracteres"),
  confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "As senhas não correspondem.",
  path: ["confirmPassword"],
})


interface FormErrors {
  password?: string;
  confirmPassword?: string;
}

export const FormResetPassword = () => {
  const { openModal } = useModal();
  const { token } = useParams<{ token: string }>();

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
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
      formResetPasswordSchema.parse(formData);
      console.log(formData, token)
      await api.patch(`/user/resetPassword/${token}}`, formData);

      openModal('Sucesso!', 'Sua senha foi atualizada com sucesso!',
        'Agora você poderá fazer o login da sua conta com sua nova senha','Ir para o login')
    } catch (error: any) {
      setFormErrors(error.formErrors?.fieldErrors || {});
      openModal('Falha!', 'Falha ao atualizar senha, revise os dados e tente novamente!', 
      'Verifique suas credenciais e tente novamente.', 'Ir para o incio')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="hover:bg-brand-brand-1
        hover:bg-opacity-90"
        type="submit">Atualizar</button>
      <Modal />
    </form>
  )
}
