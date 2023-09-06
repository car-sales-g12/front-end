/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { updateAnnouncement, announcementUpdateSchema, announcementCreateSchema } from "../../schemas/announcement.schema";
import { api } from "../../services/api";
import { useModal } from "../../providers/ModaisContext/toastModalContext";
import { AiOutlineClose } from "react-icons/ai";
import { StyledButton } from "../../pages/Register/style";
import { Announcement, SellerInfo } from "../../pages/SellerPage";
import { useForm, Controller } from 'react-hook-form';

type TFormEditAdProps = {
    setEditAdModalModal: React.Dispatch<React.SetStateAction<boolean>>
    setCreateAdModalModal: (value: React.SetStateAction<boolean>) => void
    createAdModal: boolean
    announcements: Announcement[]
    idAnnouncement: number | undefined
    sellerInfo: SellerInfo | null
}

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

export const FormEditAnnoucement = ({ idAnnouncement,
    setEditAdModalModal,
    announcements,
    setCreateAdModalModal,
    createAdModal,
    sellerInfo }: TFormEditAdProps) => {

    const { openModal } = useModal();
    const [isActive, setIsActive] = useState(false);

    const toggleIsActive = () => {
        setIsActive(true);
    };

    const toggleIsNotActive = () => {
        setIsActive(false);
    };

    const { handleSubmit, control, formState: { errors } } = useForm<updateAnnouncement>();
    const onSubmit = async (formData: updateAnnouncement) => {
        const token = localStorage.getItem("Token")
        if (formData.value_fipe !== undefined && typeof formData.value_fipe === 'string') {
            formData.value_fipe = parseFloat(formData.value_fipe);
        }
        if (formData.value !== undefined && typeof formData.value === 'string') {
            formData.value = parseFloat(formData.value);
        }
        if (formData.km !== undefined && typeof formData.km === 'string') {
            formData.km = parseFloat(formData.km);
        }

        if (formData.value! <= formData.value_fipe!) {
            formData.good_deal = true
        } else {
            formData.good_deal = false
        }
        formData.active = isActive


        if (createAdModal) {
            try {
                announcementCreateSchema.parse(formData)
                await api.post(`/announcement/${sellerInfo!.id}`, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                setEditAdModalModal(false)
                setCreateAdModalModal(false)
                openModal('Sucesso!',
                    'Anuncio criado com sucesso!',
                    'Anuncio criado com sucesso!, basta ir a sua pagina para verificar se está do jeito que você queria!',
                    'null')
            } catch (error: any) {
                openModal('Falha!',
                    'Falha ao criar anuncio!',
                    'Falha ao criar anuncio!, revise os dados e tente novamente!',
                    'null')
            }
        } else {
            try {
                announcementUpdateSchema.parse(formData);
                await api.post(`/announcement/${idAnnouncement}`, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setEditAdModalModal(false)
                openModal('Sucesso!',
                    'Anuncio editado com sucesso!',
                    'Anuncio editado com sucesso!, basta ir a sua pagina para verificar se está do jeito que você queria!',
                    'null')
            } catch (error: any) {
                console.log(error)
                openModal('Falha!',
                    'Falha ao editar anuncio!',
                    'Falha ao editar anuncio!, revise os dados e tente novamente!',
                    'null')
            }
        }
    };
    const DeleteAnnoucement = () => {
        const token = localStorage.getItem("Token")
        try {
            api.delete(`/announcement/${idAnnouncement}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setEditAdModalModal(false)
            openModal('Sucesso!',
                'Anuncio deletado com sucesso!',
                'Anuncio deletado com sucesso!, basta ir a sua pagina para verificar se está do jeito que você queria!',
                'null')
        } catch (error) {
            openModal('Falha!',
                'Falha ao deletar anuncio!',
                'Falha ao deletar anuncio!, tente novamente!',
                'null')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Informações do veículo</h3>

            <label>Marca</label>
            <Controller
                name="brand"
                control={control}
                render={({ field }) => (
                    <select {...field}>
                        {announcements.map((announcement) => (
                            <option value={announcement.brand} key={announcement.id}>
                                {announcement.brand}
                            </option>
                        ))}
                    </select>
                )}
            />
            <p className="error">{errors.brand?.message}</p>

            <label>Modelo</label>
            <Controller
                name="model"
                control={control}
                render={({ field }) => (
                    <select {...field}>
                        {announcements.map((announcement) => (
                            <option value={announcement.model} key={announcement.id}>
                                {announcement.model}
                            </option>
                        ))}
                    </select>
                )}
            />
            <p className="error">{errors.model?.message}</p>

            <div>
                <div>
                    <label>Ano</label>
                    <Controller
                        name="year"
                        control={control}
                        rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="ex: 2018"
                            />
                        )}
                    />
                    <p className="error">{errors.year?.message}</p>
                </div>
                <div>
                    <label>Combustível</label>
                    <Controller
                        name="fuel"
                        control={control}
                        rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="ex: Gasolina / Etanol"
                            />
                        )}
                    />
                    <p className="error">{errors.fuel?.message}</p>
                </div>
            </div>

            <div>
                <div>
                    <label>Quilometragem</label>
                    <Controller
                        name="km"
                        control={control}
                        rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="number"
                                placeholder="ex: 30.000"
                            />
                        )}
                    />
                    <p className="error">{errors.km?.message}</p>
                </div>
                <div>
                    <label>Cor</label>
                    <Controller
                        name="color"
                        control={control}
                        rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="ex: Branco"
                            />
                        )}
                    />
                    <p className="error">{errors.color?.message}</p>
                </div>
            </div>

            <div>
                <div>
                    <label>Preço tabela FIPE</label>
                    <Controller
                        name="value_fipe"
                        control={control}
                        rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="number"
                                placeholder="ex: R$48.000.00"
                            />
                        )}
                    />
                    <p className="error">{errors.value_fipe?.message}</p>
                </div>
                <div>
                    <label>Preço</label>
                    <Controller
                        name="value"
                        control={control}
                        rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="number"
                                placeholder="ex: R$50.000.00"
                            />
                        )}
                    />
                    <p className="error">{errors.value?.message}</p>
                </div>
            </div>


            <div>
                <div className="div_description_img">
                    <label>Descrição</label>
                    <Controller
                        name="description"
                        control={control}
                        rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder="ex: Unico dono carro esportivo, extremamente confortavel e veloz!"
                                value={field.value || ""}
                            />
                        )}
                    />
                    <p className="error">{errors.description?.message}</p>
                </div>
            </div>

            {!createAdModal ? <><h3>Publicado</h3>
                <div className='div-is-active'>
                    <Button onClick={toggleIsNotActive} active={`${!isActive}`} >Não</Button>
                    <Button onClick={toggleIsActive} active={`${isActive}`} >Sim</Button>
                </div></> : null}

            {[0, 1, 2].map((index) => (
                <div key={index}>
                    <div className="div_description_img">
                        <label>{`${index === 0 ? 'Imagem da capa' : `${index}° Imagem da galeria`}`}</label>
                        <Controller
                            name={`cover_img`}
                            control={control}
                            rules={{ required: !createAdModal ? false : 'Este campo é obrigatório' }}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    placeholder={`ex: https://image.com ${index === 0 ? '' : `#${index}`}`}
                                />
                            )}
                        />
                    </div>
                    <p className="error">{errors.cover_img?.message}</p>
                </div>
            ))}

            <button type="button" className="button_add_galeria">Adicionar campo para imagem da galeria</button>

            <div className="div_button_options">
                <button type="button" onClick={() => {
                    if (createAdModal) {
                        setEditAdModalModal(false)
                        setCreateAdModalModal(false)
                    }
                    DeleteAnnoucement()
                }}>{createAdModal ? "Cancelar" : "Excluir anúncio"}</button>
                <button type="submit">{createAdModal ? "Criar anúncio" : "Salvar alterações"}</button>
            </div>

            <button className="modal-close-button" onClick={() => {
                setCreateAdModalModal(false)
                setEditAdModalModal(false)
            }}>
                <AiOutlineClose />
            </button>
        </form>
    )
}