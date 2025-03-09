import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from './UserForm';

const ListUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch users from the server
        const fetchUsers = async () => {
            const response = await fetch('/UserModels');
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id:any) => {
        await fetch(`/UserModels/Delete?id=${id}`, {
            method: 'POST'
        });
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEdit = (user: User) => {
        navigate('/edit', { state: { user } });
    };

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h2 style={{flex: 'auto'}}>List of Users</h2>
                <a href="/create"style={{paddingRight: '30px'}}>Create User</a> 
            </div>
            
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.firstName} {user.lastName} - {user.email}
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListUsers;
