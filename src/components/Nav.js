import React from 'react';
import { Link } from 'react-router-dom';
import Accounts from './Accounts';
import classes from '../styles/Nav.module.css';
import logo from '../assets/logo-icon/logo.png';


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Quiz Mafia</h3>
                    </Link>
                </li>
            </ul>
            <Accounts />
        </nav>
    );
};

export default Nav;