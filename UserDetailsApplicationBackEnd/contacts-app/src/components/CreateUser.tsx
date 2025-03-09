import React from 'react';
import UserForm, { User } from './UserForm';

const CreateUser: React.FC = () => {
    // Define a function to handle form submission
    const handleUserSubmit = (user: User) => {
        fetch('/UserModels/Create', {
            method: 'POST',body: JSON.stringify(user),headers: {
                'Content-Type': 'application/json'
            }}).then(() => {
                // Redirect to the list of users
                window.location.href = '/';
            });
            // Add logic to handle user creation                ;
    };

    return (
        <div>
            <h2>Create User</h2>
            <UserForm onSubmit={handleUserSubmit} />
        </div>
    );
};

export default CreateUser;
