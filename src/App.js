import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import WorkDetails from './pages/WorkDetails';

const App = () => {
  return (
    <Router>
      <main className="main-wrapper">
        <Navbar />
        <Switch>
          <Route path="/" component={<Home />} />
          <Route path="/works" component={<Work />} />
          <Route path="/about" component={<About />} />
          <Route path="/work/:id" component={<WorkDetails />} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
