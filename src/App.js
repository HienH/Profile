import React, { Component } from 'react';
import './App.css';
import Navi from './components/Navi';
import Profile from './components/Profile';


class App extends Component {

  render() {

    return (

      <div className="App">

        <Profile />

      </div>
    );
  }
}

export default App;
