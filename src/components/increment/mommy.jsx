import React from "react";
import PropTypes from 'prop-types';

import { FamilyContext } from '../context';

export default class Mommy extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
    }

    handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    };

    handleClick = () => {
        const data = {
            name: this.state.name,
            age: this.state.age
        }
        this.props.onUpdateUserInfo(data)
    }

    handleChangeOld() {

    };

    render() {
        return (
            <FamilyContext.Consumer>
                {
                    (props) => {
                        console.log(props)
                        return (
                            <div style={{ border: "1px solid green", backgroundColor: "#AE8B55" }}>
                                <h4>This is Mommy</h4>
                                Please enter your fucking name:
                                <input
                                    type="text"
                                    name="userName"
                                    value={props.data.data.userName}
                                    onChange={props.onChange} /><br />
                                Please enter your fucking age:
                                <input
                                    type="text"
                                    name="userAge"
                                    value={props.data.data.userAge}
                                    onChange={props.onChange} />
                                <br />
                                <button onClick={this.handleClick} >Update Person Data</button>
                            </div>
                        )
                    }
                }

            </FamilyContext.Consumer>
        )
    }
}

Mommy.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    })
}