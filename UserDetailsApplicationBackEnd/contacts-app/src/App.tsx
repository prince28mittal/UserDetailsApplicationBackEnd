import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUsers from './components/ListUsers';
import DeleteUser from './components/DeleteUser';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<ListUsers />} />
                    <Route path="/create" element={<CreateUser />} />
                    <Route path="/edit" element={<EditUser />} />
                    <Route path="/delete" element={<DeleteUser />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
