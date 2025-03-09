import React, { useState } from 'react';

const DeleteUser: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleDelete = async () => {
        await fetch(`/UserModels/Delete?email=${email}`, {
            method: 'DELETE'
        });
        // Add logic to handle user deletion
    };

    return (
        <div>
            <h2>Delete User</h2>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter user email" 
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteUser;
