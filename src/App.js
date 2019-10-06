import React, { Component } from 'react';
import Menu from './Menu';
import Navbar from './Navbar'
import Home from './Home';
import Book from './Book';
import Contact from './Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Account from './Account';
import Order from './Order';
import Get from './Get';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div>
        <Navbar/>
        <switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Book" exact component={Book}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/Account" exact component={Account}/>
          <Route path="/Order" exact component={Order}/>
          <Route path="/Get" exact component={Get}/>
        </switch>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;