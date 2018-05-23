import React, { Component } from 'react';
import './App.css';
import Person from './Person';
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>React App</h1>
        <Person name="Pavel" age="34"/>
      </div>
    );
    /*return React.createElement(
        'div',
        {className: "App"},
        React.createElement('h1', null, 'React create element')
        );*/
  }
}

export default App;
