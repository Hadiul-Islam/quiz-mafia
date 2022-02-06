import React from 'react';
import Analysis from '../Analysis';
import LayoutWithNav from '../Layouts/LayoutWithNav';
import Summary from '../Summary';

const Result = () => {
    return (
        <LayoutWithNav>
            <Summary />
            <Analysis />
        </LayoutWithNav>
    );
};

export default Result;