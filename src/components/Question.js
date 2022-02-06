import React from 'react';
import Answers from './Answers';
import classes from '../styles/Question.module.css';

const Question = () => {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question Quiz Mafia?
            </div>
            <Answers />
        </div>
    );
};

export default Question;