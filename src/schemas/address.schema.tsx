import { z } from "zod";

export const formAddressSchema = z.object({
    complement: z.string().nonempty("Complemento é obrigatório").max(250, "O complemento pode ter no máximo 250 caracteres").min(2, "O complemento tem que ter no minimo 2 caractes"),
    number: z.string().nonempty("Numero é obrigatório").max(250, "O numero pode ter no máximo 250 caracteres").min(1, "O numero tem que ter no minimo 1 caractes"),
    city: z.string().nonempty("Cidade é obrigatória").max(250, "A cidade pode ter no máximo 250 caracteres").min(2, "A cidade tem que ter no minimo 2 caractes"),
    state: z.string().nonempty("Estado é obrigatório").max(250, "O estado pode ter no máximo 250 caracteres").min(2, "O estado tem que ter no minimo 2 caractes"),
    street: z.string().nonempty("Rua é obrigatória").max(250, "A rua pode ter no máximo 250 caracteres").min(3, "A rua tem que ter no minimo 3 caractes"),
    zip_code: z.string().nonempty("CEP é obrigatório").max(250, "O CEP pode ter no máximo 250 caracteres").min(2, "O CEP tem que ter no minimo 2 caractes"),
})

export type dataAddress = z.infer<typeof formAddressSchema>