import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SuperAwesomeChatApp from './SuperAwesomeChatApp';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <SuperAwesomeChatApp />
      </div>
    );
  }
}

export default App;
