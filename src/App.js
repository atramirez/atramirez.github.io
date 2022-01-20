import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/navigation';
import Home from './pages/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact';
import Footer from "./components/footer";
//import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
      </Router>
        <Footer/>
    </div>
  );
}

export default App;
