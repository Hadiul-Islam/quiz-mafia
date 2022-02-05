import React from 'react';
import Accounts from './Accounts';
import classes from '../styles/Nav.module.css';
import logo from '../assets/logo-icon/logo.png';


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Quiz Mafia</h3>
                    </a>
                </li>
            </ul>
            <Accounts />
        </nav>
    );
};

export default Nav;