import React from 'react';
import logo from './logo.svg';
import './App.css';
import My_Sidebar from './Components/My_Sidebar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App-header">
      <Router>
        <My_Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Simulator" component={Home} />
          <Route path="/Illustrations" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
