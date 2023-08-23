import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import jwt_decode from "jwt-decode";

interface SellerInfo {
    name: string;
    description: string;
}

export const SellerDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [sellerInfo, setSellerInfo] = useState<SellerInfo | null>(null);
    const token = localStorage.getItem('Token');

    useEffect(() => {
        const fetchSellerInfo = async () => {
            try {
                if (token) {
                    const decodedToken = jwt_decode(token);
                    if (decodedToken && typeof decodedToken === 'object' && 'id' in decodedToken) {
                        const userId = decodedToken.id;
                        const response = await api.get(`/user/${userId}`);
                        setSellerInfo(response.data);
                    }
                }
            } catch (error) {
                // Handle error
            }
        };

        fetchSellerInfo();
    }, [token]);

    return (
        <div>
            <div>
                {sellerInfo && (
                    <>
                    <div>
                        <h2>{sellerInfo.name.split(' ').map(word => word.charAt(0)).join('')}</h2>
                        <h3>{sellerInfo.name}</h3>
                        <div>{sellerInfo.description}</div>
                        <button onClick={() => navigate('/create-listing')}>Criar Anúncio</button>
                    </div>
                    <div>
                        <div>
                            <h1>Anúncios</h1>
                        </div>
                    </div>
                    </>

                )}
            </div>
        </div>
    );
};