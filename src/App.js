import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "This is Class based Component"
    };
  }

  handleChange = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState(
      (prevState, prevProps) => ({
        headerText: value
      }),
      () => {
        console.log("эстейт поменялся", this.state);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.headerText}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <input
            onChange={this.handleChange}
            type="text"
            name="headerText"
            value={this.state.headerText}
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <App />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App2;
