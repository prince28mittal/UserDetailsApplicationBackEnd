import React, { useState, useEffect } from 'react';
import './UserForm.css';

// Define the props for the UserForm component
interface UserFormProps {
    onSubmit?: (user: User) => void;
    onUpdate?: (user: User) => void;
    userToEdit?: User | null;
}

// Define the User interface
export interface User {
    id?:any;
    firstName: string;
    lastName: string;
    contact: string;
    email: string;
    address: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, onUpdate, userToEdit }) => {
    // State to store the user form data
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        address: ''
    });

    // Effect to set the form data when editing a user
    useEffect(() => {
        if (userToEdit) {
            setUser(userToEdit);
        }
    }, [userToEdit]);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userToEdit) {
            onUpdate && onUpdate(user);
        } else {
            onSubmit && onSubmit(user);
        }
        // Reset the form
        setUser({
            firstName: '',
            lastName: '',
            contact: '',
            email: '',
            address: ''
        });
    };

    return (
        <form className="user-form" onSubmit={handleSubmit} aria-label="User Form">
            {/* <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">User Information</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                        Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                        Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4">
                        <label htmlFor="contact" className="block text-sm/6 font-medium text-gray-900">
                        Contact No.: 
                        </label>
                        <div className="mt-2">
                            <input
                                id="contact"
                                name="contact"
                                type="text"
                                placeholder="Contact"
                                title="Enter your contact number"
                                required
                                aria-required="true"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                        Street address
                        </label>
                        <div className="mt-2">
                            <input
                                id="street-address"
                                name="street-address"
                                type="text"
                                autoComplete="street-address"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            <div>
                <label htmlFor="firstName">First Name: <span className="required">*</span></label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    title="Enter your first name"
                    required
                    aria-required="true"
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: <span className="required">*</span></label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    title="Enter your last name"
                    required
                    aria-required="true"
                />
            </div> 
             <div>
                <label htmlFor="contact">Phone No.: <span className="required">*</span></label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={user.contact}
                    onChange={handleChange}
                    placeholder="Contact"
                    title="Enter your contact number"
                    required
                    aria-required="true"
                />
            </div>
            <div>
                <label htmlFor="email">Email: <span className="required">*</span></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                    title="Enter your email address"
                    required
                    aria-required="true"
                    disabled={!!userToEdit}
                />
            </div>
             <div>
                <label htmlFor="address">Address: <span className="required">*</span></label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    placeholder="Address"
                    title="Enter your address"
                    required
                    aria-required="true"
                />
            </div> 
            <button type="submit" title={userToEdit ? 'Update User' : 'Submit User'}>{userToEdit ? 'Update' : 'Submit'}</button>
        </form>
    );
};

export default UserForm;
