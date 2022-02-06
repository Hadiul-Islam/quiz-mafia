import React from 'react';
import Answers from '../Answers';
import LayoutWithNav from '../Layouts/LayoutWithNav';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

const Quiz = () => {
    return (
        <LayoutWithNav>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answers />
            <ProgressBar />
            <MiniPlayer />
        </LayoutWithNav>
    );
};

export default Quiz;