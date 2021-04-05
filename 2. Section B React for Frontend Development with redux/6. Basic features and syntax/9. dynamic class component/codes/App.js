import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  render() {
    // let obj = new Component();
    // console.log(obj);
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Person name="Rahim" age="30"> I am some info of person</Person>
        <Person name="Karim" age="28" />
        <Person name="Jamal" age="32" />
        <Person name="Rahat" age="31" />
      </div>
    );
  }
}

export default App;
