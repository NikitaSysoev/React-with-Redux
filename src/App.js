import React from "react";

import Increment from "./components/increment";
import logo from "./logo.svg";
import "./App.css";

export default class Statefull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        counter: 0,
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

    // 2 dариант изменения стейта
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

  handleCounterClick = e => {
    const { name } = e.target;
    this.setState(prevState => {
      let res = prevState.data.counter;
      res = name === "increment" ? res + 1 : res - 1;
      return {
        data: {
          ...prevState.data,
          counter: res
        }
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.data.headerText}</h1>
          <h2>Counter: {this.state.data.counter}</h2>
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
        <Increment
          onClick={this.handleCounterClick}
          names={["increment", "decrement"]}
          values={["increment", "decrement"]}
        />
      </div>
    );
  }
}
