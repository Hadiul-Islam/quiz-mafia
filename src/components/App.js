import React from 'react';
import Home from '../pages/Home';
import '../styles/root.css';
import LayoutWithNav from './Layouts/LayoutWithNav';

const App = () => {
  return (
    <LayoutWithNav>
      <Home />
    </LayoutWithNav>
  );
};

export default App;