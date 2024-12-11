import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <main className="main-wrapper">
      <Navbar />
      <Header />
      <Portfolio />
    </main>
  );
};

export default App;
