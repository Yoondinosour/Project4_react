import React from "react";
import axios from "axios";
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


import "./App.css";
import Navigation from './components/Navigation';

function App() {
  return (
 
      <HashRouter>
<Navigation />
             <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
      </HashRouter>
  );
}

export default App;