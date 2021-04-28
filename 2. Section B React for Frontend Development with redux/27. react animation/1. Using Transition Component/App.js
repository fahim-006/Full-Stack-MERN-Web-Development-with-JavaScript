import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './App.css';

class App extends Component {
  state = {
    show: true
  }
  render() {
    // entering
    // entered
    // exiting
    // exited
    return (
      <div className="App" >
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle</button>

        <Transition in={this.state.show} timeout={1000}>
          {
            mode => (
              <div style={{
                background: "black",
                color: "white",
                borderRadius: 4,
                transition: 'opacity 1s ease-out',
                opacity: mode === "exited" ? 0 : 1
              }}>
                <p>I am some text!</p>
              </div>
            )
          }
        </Transition>
      </div >
    );
  }
}

export default App;
