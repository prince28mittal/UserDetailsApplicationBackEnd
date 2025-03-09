import React from 'react';
import { useLocation } from 'react-router-dom';
import UserForm, { User } from './UserForm';

const EditUser: React.FC = () => {
    const location = useLocation();
    const user = location.state?.user as User;

    // Define a function to handle form submission
    const handleUserUpdate = (updatedUser: User) => {
        fetch(`/UserModels/Edit?id=${updatedUser.id}`, {
            method: 'POST',
            body: JSON.stringify(updatedUser),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            // Redirect to the list of users
            window.location.href = '/';
        });;
    };

    return (
        <div>
            <h2>Edit User</h2>
            <UserForm onUpdate={handleUserUpdate} userToEdit={user} />
        </div>
    );
};

export default EditUser;
