import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Statefull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        headerText: "This is Class based Component",
        userName: "Sofi",
        userAge: 20
      }
    };
  }

  handleChange = e => {
    const { target } = e; // деструктуризация
    const { name, value } = target;

    // 1 вариант изменения стейта
    // this.setState({headerText: value, name }, () => console.log(this.state))

    this.setState(
      (prevState, prevProps) => {
        console.log("предыдущий стейт", prevState, prevProps);
        return {
          data: {
            ...prevState.data,
            [name]: value
          }
        };
      },
      () => {
        console.log("текущий стейт", this.state, this.props);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.data.headerText}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="headerText"
            value={this.state.data.headerText}
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="userName"
            value={this.state.data.userName}
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="userAge"
            value={this.state.data.userAge}
          />
        </header>
        <Stateless />
      </div>
    );
  }
}

function Stateless() {
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

export default Statefull;
