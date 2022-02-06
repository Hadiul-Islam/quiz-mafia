import React from 'react';
import classes from '../styles/Video.module.css';
import image from '../assets/images/thumbnail.png';
import { Link } from 'react-router-dom';

const Video = () => {
    return (
        <Link to="/quiz">
            <div className={classes.video}>
                <img src={image} alt="Video Title" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </Link>
    );
};

export default Video;