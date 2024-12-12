import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="main-wrapper">
      <Navbar />
      <Header />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default App;
