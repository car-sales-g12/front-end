/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import jwt_decode from "jwt-decode";

interface SellerInfo {
    name: string;
    description: string;
}

interface Announcement {
    id: number;
    brand: string;
    model: string;
    year: string;
    fuel: string;
    km: string;
    color: string;
    good_deal: boolean;
    value: string;
    description: string;
    cover_img: string;
}

export const SellerDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [sellerInfo, setSellerInfo] = useState<SellerInfo | null>(null);
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const token = localStorage.getItem('Token');

    useEffect(() => {
        const fetchSellerData = async () => {
            try {
                if (token) {
                    const decodedToken: any = jwt_decode(token);
                    if (decodedToken && 'id' in decodedToken) {
                        const userId = decodedToken.id;
                        const userResponse = await api.get(`/user/${userId}`);
                        setSellerInfo(userResponse.data);

                        const announcementsResponse = await api.get(`/announcement/user/${userId}`);
                        setAnnouncements(announcementsResponse.data);
                    }
                }
            } catch (error) {
                // Handle error
            }
        };

        fetchSellerData();
    }, [token]);

    return (
        <div>
            <div>
                {sellerInfo && (
                    <div>
                        <h2>{sellerInfo.name.split(' ').map(word => word.charAt(0)).join('')}</h2>
                        <h3>{sellerInfo.name}</h3>
                        <div>{sellerInfo.description}</div>
                        <button onClick={() => navigate('/create-listing')}>Criar Anúncio</button>
                    </div>
                )}

                <div>
                    <h1>Anúncios</h1>
                    <ul>
                        {announcements.map((announcement) => (
                            <li key={announcement.id}>
                                <div>
                                    <img src={announcement.cover_img} alt={`${announcement.brand} - ${announcement.model}`} />
                                </div>
                                <div>
                                    <h2>{`${announcement.brand} - ${announcement.model}`}</h2>
                                    <p>{announcement.description}</p>
                                    <span>{`${announcement.km} km | ${announcement.year} | R$ ${announcement.value}`}</span>
                                    <span>
                                        <button>Editar</button>
                                        <button>Ver Detalhes</button>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};