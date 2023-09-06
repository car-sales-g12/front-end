import { z } from "zod";

export const formRegisterSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório").max(250, "O nome pode ter no máximo 250 caracteres"),
    email: z.string().nonempty("E-mail é obrigatorio").email("Forneça um e-mail válido").max(250, "O email pode ter no máximo 250 caracteres"),
    cpf: z.string().min(11, "O cpf tem que ter no minimo 11 caracteres").max(11, "O cpf pode ter no máximo 11 caracteres").nonempty("CPF é obrigatório"),
    telephone: z.string().max(25, "O telefone pode ter no máximo 25 caracteres").nonempty("Telefone é obrigatório"),
    birth_date: z.string().max(20, "A data de nascimento pode ter no máximo 20 caracteres").nonempty("Data de nascimento é obrigatória"),
    description: z.string().nullable(),
    is_seller: z.boolean(),
    password: z.string().nonempty("Senha é obrigatória").max(250, "A senha pode ter no máximo 250 caracteres").min(5, "A senha tem que ter no minimo 5 caracteres"),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
})

export type dataRegister = z.infer<typeof formRegisterSchema>