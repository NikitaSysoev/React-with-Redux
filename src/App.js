import React from "react";
import PropTypes from "prop-types";
import Increment from "./components/increment";
import logo from "./logo.svg";
import "./App.css";

// export const FamilyContext = React.createContext({});
import { FamilyContext } from "./components/context";

// const FamilyProvider = FamilyContext.Provider;
// const FamilyConsumer = FamilyContext.Consumer;

export default class App extends React.Component {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: "default text for title"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {
        counter: 0,
        headerText: "This is Class based Component",
        userName: "Sofi",
        userAge: 20,
        name: "Sofi",
        age: 30
      }
    };
  }

  handleUpdateUserInfo = data => {
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          userName: data.name,
          userAge: data.age
        }
      };
    });
  };

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
    const person = {
      name: this.state.data.userName,
      age: this.state.data.userAge
    };
    const providerData = {
      data: this.state,
      onChange: this.handleChange
    };
    return (
      <FamilyContext.Provider value={providerData}>
        <div className="App">
          <header className="App-header">
            <h1>{this.state.data.headerText}</h1>
            <h2>Counter: {this.state.data.counter}</h2>
            <h3>This is props: {this.props.title}</h3>
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
            person={person}
            onUpdateUserInfo={this.handleUpdateUserInfo}
          />
        </div>
      </FamilyContext.Provider>
    );
  }
}

// 1 variant
// Statefull.propTypes = {
//   title: PropTypes.string
// }
