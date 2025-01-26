import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import WorkDetails from './pages/WorkDetails';
import Login from "./pages/Login";

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);

  // Render Login if not authenticated
  if (!authenticated) {
    return (
      <Login
        onAuthenticated={() => {
          setAuthenticated(true); // Toggle authentication when the user logs in
        }}
      />
    );
  }

  return (
    <Router>
      <main className="main-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:id" element={<WorkDetails />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
