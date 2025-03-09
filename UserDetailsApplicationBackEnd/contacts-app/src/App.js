import React, { useState } from 'react';
import UserForm from './components/UserForm';

const App = () => {
    const [users, setUsers] = useState([]);
    const existingEmails = users.map(user => user.email);

    const handleUserSubmit = (user) => {
        setUsers([...users, user]);
    };

    return (
        <div>
            <h1>User</h1>
            <UserForm existingEmails={existingEmails} onSubmit={handleUserSubmit} />
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.firstName} {user.lastName} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
