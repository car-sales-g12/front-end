import React from 'react';
import { StyleEditAdModal } from './styles';
import { Announcement, SellerInfo } from '../../pages/SellerPage';
import { FormEditAnnoucement } from '../Forms/editAnnoucement';


type TEditAdModalProps = {
    setEditAdModalModal: React.Dispatch<React.SetStateAction<boolean>>
    setCreateAdModalModal: (value: React.SetStateAction<boolean>) => void
    createAdModal: boolean
    editAdModal: boolean
    idAnnouncement: number | undefined
    sellerInfo: SellerInfo | null
    announcements: Announcement[]
}

const EditAdModal = ({ setEditAdModalModal, editAdModal, idAnnouncement, setCreateAdModalModal, createAdModal, sellerInfo, announcements }: TEditAdModalProps) => {
    return (
        <>{editAdModal ? <StyleEditAdModal>
            <div>
                <h1>{createAdModal ? "Criar anúncio" : "Editar anúncio"}</h1>
                <FormEditAnnoucement sellerInfo={sellerInfo} idAnnouncement={idAnnouncement} setEditAdModalModal={setEditAdModalModal} announcements={announcements} createAdModal={createAdModal} setCreateAdModalModal={setCreateAdModalModal}/>
            </div>
        </StyleEditAdModal> : null}
        </>
    );
};

export default EditAdModal;

