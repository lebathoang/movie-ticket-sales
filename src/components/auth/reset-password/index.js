import { useSearchParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Logo from '~/assets/images/logo.png';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';

function ResetPassword() {
    const [params] = useSearchParams();
    const navigate = useNavigate();

    const id = params.get('id');
    const token = params.get('token');

    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        if (password.length < 6) return setError('Password must be at least 6 characters long.');
        if (password !== confirm) return setError('Password does not match.');

        try {
            setLoading(true);
            const res = await axios.post('http://localhost:3000/api/auth/reset-password', {
                id,
                token,
                password,
            });

            if (res.data.success) {
                alert('Password changed successfully.');
                navigate('/auth');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Sever Error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="forgot-password-wrap">
                <div className="auth-container">
                    <form className="auth-form" onSubmit={submit}>
                        <h2>Reset password</h2>
                        <input
                            type="password"
                            placeholder="new Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                        />
                        <input
                            type="password"
                            placeholder="confirm Password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            disabled={loading}
                        />
                        {error && <p className="error">{error}</p>}
                        <button disabled={loading}>{loading ? <span className="spinner" /> : 'Confirm'}</button>
                    </form>
                </div>
                <div>
                    <img src={Logo} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ResetPassword;
