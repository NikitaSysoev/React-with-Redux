import React from "react";
import PropTypes from 'prop-types';
import Mommy from "./mommy";

const Granny = (props) => {
    return (
        <div style={{ backgroundColor: "#D9FFF8" }}>
            <h4>This is GrandMother:</h4>
            <h5>Props: {props.person.name} {props.person.age}</h5>
            <Mommy person={props.person} onUpdateUserInfo={props.onUpdateUserInfo} />

        </div>
    )
}

export default Granny;

Granny.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }),
    onUpdateUserInfo: PropTypes.func
}