import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import App from './components/App';
import Search from './components/Search';
import Footer from './components/Footer';

export default (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={App} />
      <Route exact path="/search" component={Search} />
    <Footer />
    </div>
  </BrowserRouter>
)