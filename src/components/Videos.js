import React from 'react';
import Video from './Video';
import classes from '../styles/Vedios.module.css';

const Videos = () => {
    return (
        <div className={classes.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
};

export default Videos;