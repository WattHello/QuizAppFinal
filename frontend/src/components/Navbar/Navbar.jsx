import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import { useQuiz } from '../../AuthContext/quizContext';
import './Navbar.css';

const Navbar = ({ token }) => {
    const { AuthDispatch, username } = useAuth();
    const { quizDispatch } = useQuiz();
    const navigate = useNavigate();

    const logoutUser = () => {
        if (token) {
            localStorage.clear();
            AuthDispatch({ type: 'TOKEN', payload: '' });
        }
        navigate('/auth/login');
    };

    const handleHome = () => {
        quizDispatch({ type: 'INITIAL' });
    };

    return (
        <header className="nav-container">
            <div className="nav-head-container">
                <h1 className="nav-head">Quizzacal</h1>
            </div>
            <nav className="nav-order-list">
                <ul className="nav-list-container">
                    <li className="nav-list-item">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                            onClick={handleHome}
                        >
                            Home
                        </NavLink>
                    </li>
                    {token ? (
                        <li className="nav-list-item">
                            <span className="nav-link">{username}</span>
                            <NavLink 
                                to="/auth/login" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                                onClick={logoutUser}
                            >
                                Logout
                            </NavLink>
                        </li>
                    ) : (
                        <li className="nav-list-item">
                            <NavLink 
                                to="/auth/login" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Login
                            </NavLink>
                            <NavLink 
                                to="/auth/signup" 
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Register
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
