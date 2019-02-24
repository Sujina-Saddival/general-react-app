import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

const Item = ({item}) => {
  return (
    <div className='item-div' key={item.id}>{item.name}</div>
  )
}

class App extends Component {
  state = {
    items:[
      { id: 1, name: 'items1' },
      { id: 2, name: 'items2' },
      { id: 3, name: 'items3' },
      { id: 4, name: 'items4' },
    ]
  }
  render() {
    return (
      <div className="App">
       <Card text='sap' />
      </div>
    );
  }
}

export default App;
