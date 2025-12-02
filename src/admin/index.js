import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log('Error ', err);
            });
    }, []);

    return (
        <div>
            <h3>Danh sach users</h3>
            <table>
                <tr>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.fullname}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default UserList;
