import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({ fullname: '', email: '', password: '' });

    // Lấy dữ liệu khi load trang
    useEffect(() => {
        axios.get('http://localhost:5000/api/user').then((res) => {
            setUsers(res.data);
        });
    }, []);

    // Gửi dữ liệu POST
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/user', form).then((res) => {
            alert(res.data.message);
            setUsers([...users, { ...form }]);
            setForm({ name: '', email: '', password: '' });
        });
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Danh sách người dùng</h2>
            <ul>
                {users.map((u, i) => (
                    <li key={i}>
                        {u.name} - {u.email} - {u.password}
                    </li>
                ))}
            </ul>

            <h3>Thêm người dùng</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Fullname"
                    value={form.fullname}
                    onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                />
                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button type="submit">Thêm</button>
            </form>
        </div>
    );
}

export default Admin;
