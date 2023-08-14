import { z } from "zod";

export const formLoginSchema = z.object({
    email: z.string().nonempty("E-mail é obrigatorio").email("Forneça um e-mail válido").max(250, "O email pode ter no máximo 250 caracteres"),
    password: z.string().nonempty("Senha é obrigatória").max(250, "A senha pode ter no máximo 250 caracteres"),
})

export type dataLogin = z.infer<typeof formLoginSchema>