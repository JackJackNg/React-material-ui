import React, { Component } from 'react';
import TodoList from './compenent/TodoList'
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render () {
    return (
      <div>
        <h1 className="App-title">My to do list </h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
