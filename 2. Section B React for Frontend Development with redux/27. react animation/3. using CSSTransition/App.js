import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

        <CSSTransition
          in={this.state.show}
          timeout={animateTime}
          mountOnEnter
          unmountOnExit
          classNames="myClass"
        >
          {
            mode => (
              <div style={{
                background: "black",
                color: "white",
                borderRadius: 4,
              }}>
                <p>I am some text!</p>
              </div>
            )
          }
        </CSSTransition>
        <p>I am outside transition!</p>
      </div >
    );
  }
}

export default App;
