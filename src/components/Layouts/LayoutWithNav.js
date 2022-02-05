import React from 'react';
import Nav from '../Nav';
import classes from '../../styles/LayoutWithNav.module.css';


const LayoutWithNav = ({ children }) => {
    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </main>
        </>
    );
};

export default LayoutWithNav;