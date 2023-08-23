/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Input } from "../Input";
import { api } from "../../services/api";
import { formLoginSchema } from "../../schemas/login.schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

interface FormErrors {
  email?: string;
  password?: string;
}

interface FormLoginProps {
  onLoginSuccess: (isSeller: boolean) => void;
}

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
      const { token } = response.data;
      localStorage.setItem("Token", token);

      if (response.data) {
        const isSeller = response.data.is_seller;
        onLoginSuccess(isSeller);
        console.log(isSeller)
        if (isSeller) {
          toast.success("Login realizado com sucesso como vendedor");
          setTimeout(() => navigate("/seller-dashboard"), 3100);
        } else {
          toast.success("Login realizado com sucesso");
          setTimeout(() => navigate("/"), 3100);
        }
      } else {
        toast.error("Token inválido ou informações ausentes");
      }
    } catch (error: any) {
      setFormErrors(error.formErrors?.fieldErrors || {});
      toast.error(
        "Falha ao realizar o login, revise os dados e tente novamente"
      );
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

      <button type="submit">Entrar</button>
      <ToastContainer
        position="top-right"
        autoClose={2300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
};
