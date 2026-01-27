import { useState } from 'react';
import axios from 'axios';

import Logo from '~/assets/images/logo.png';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    // handle login
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.length || !email.includes('@')) {
            setEmailError('Email address is invalid');
            return;
        }

        try {
            setLoading(true);
            setEmailError('');

            const res = await axios.post('http://localhost:3000/api/auth/forgot-password', { email });

            if (res.data.success) {
                setSuccess(res.data.message);
            }
        } catch (err) {
            setEmailError(err.response?.data?.message || 'Sever Error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="forgot-password-wrap">
                <div className="auth-container">
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <h2>Forgot Password</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />
                        {emailError && <p className="error">{emailError}</p>}
                        {success && <p className="success">{success}</p>}

                        <button disabled={loading}>{loading ? <span className="spinner" /> : 'Send email'}</button>
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

export default ForgotPassword;
