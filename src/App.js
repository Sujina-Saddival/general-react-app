import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <div>
        <h1>react redux app</h1>
        <Posts />
      </div>
    );
  }
}

export default App;
