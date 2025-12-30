import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

function ActiveAccount() {
    const [message, setMessage] = useState('processing...');

    const [params] = useSearchParams();
    const token = params.get('token');

    useEffect(() => {
        if (!token) {
            setMessage('Token not found');
            return;
        }
        try {
            const decoded = jwtDecode(token);

            if (decoded.exp < Date.now() / 1000) {
                setMessage('Token has expired');
                return;
            }
            const userId = decoded.payload.insertId;

            axios
                .post('http://localhost:3000/api/auth/active-account', { userId })
                .then((res) => {
                    const data = res.data;
                    if (data.success) {
                        setMessage('Activate account successful');
                    } else {
                        setMessage('Activate account failed');
                    }
                })
                .catch(() => {
                    if (decoded.is_active) {
                        setMessage('Before, Activated account');
                    } else {
                        setMessage('Server error');
                    }
                });
        } catch (error) {
            console.log('Token not exist');
        }
    }, []);

    return (
        <div style={{ padding: 40 }}>
            <h2>{message}</h2>
        </div>
    );
}

export default ActiveAccount;
