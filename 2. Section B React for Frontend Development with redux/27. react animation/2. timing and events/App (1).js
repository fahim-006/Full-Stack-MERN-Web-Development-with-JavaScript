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
    const animateTime = {
      enter: 1000,
      exit: 500
    }
    return (
      <div className="App" >
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle</button>

        <Transition
          in={this.state.show}
          timeout={animateTime}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExited={() => console.log("onExited")}
          onExiting={() => console.log("onExiting")}
        >
          {
            mode => (
              <div style={{
                background: "black",
                color: "white",
                borderRadius: 4,
                transition: 'opacity 1s ease-out',
                opacity: mode === "exiting" || mode === "entering" ? 0 : 1
              }}>
                <p>I am some text!</p>
              </div>
            )
          }
        </Transition>
        <p>I am outside transition!</p>
      </div >
    );
  }
}

export default App;
