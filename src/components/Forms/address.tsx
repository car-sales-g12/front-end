/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Input } from "../Input";
import 'react-toastify/dist/ReactToastify.css';
import { FormAddressErrors } from './register';
import { FormAdress } from '../../pages/Register/style';

interface FormRegisterAddressProps {
    formDataAddress: {
        zip_code: string;
        street: string;
        number: string;
        complement: string;
        state: string;
        city: string;
    }
    setFormDataAddress: React.Dispatch<React.SetStateAction<{
        zip_code: string;
        street: string;
        number: string;
        complement: string;
        state: string;
        city: string;
    }>>
    formErrorsAddress: FormAddressErrors
}

export const FormRegisterAddress = ({ formDataAddress, setFormDataAddress, formErrorsAddress }: FormRegisterAddressProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDataAddress({
            ...formDataAddress,
            [name]: value
        });
    };

    return (
        <FormAdress>
            <Input
                label="CEP"
                type="text"
                placeholder="00000.000"
                name="zip_code" value={formDataAddress.zip_code}
                onChange={handleChange} />
            <p className="error">{formErrorsAddress['zip_code']}</p>

            <div>
                <Input
                    label="Estado"
                    type="text"
                    placeholder="Digitar Estado"
                    name="state" value={formDataAddress.state}
                    onChange={handleChange} />
                <p className="error">{formErrorsAddress['state']}</p>
                <Input
                    label="Cidade"
                    type="text"
                    placeholder="Digitar cidade"
                    name="city" value={formDataAddress.city}
                    onChange={handleChange} />
                <p className="error">{formErrorsAddress['city']}</p>
            </div>

            <Input
                label="Rua"
                type="text"
                placeholder="Rua dos Devs"
                name="street" value={formDataAddress.street}
                onChange={handleChange} />
            <p className="error">{formErrorsAddress['street']}</p>

            <div>
                <Input
                    label="Numero"
                    type="text"
                    placeholder="Digitar numero"
                    name="number" value={formDataAddress.number}
                    onChange={handleChange} />
                <p className="error">{formErrorsAddress['number']}</p>
                <Input
                    label="Complemento"
                    type="text"
                    placeholder="Ex: Apartamento 55 no 5° andar"
                    name="complement" value={formDataAddress.complement}
                    onChange={handleChange} />
                <p className="error">{formErrorsAddress['complement']}</p>
            </div>
        </FormAdress>
    )
}
