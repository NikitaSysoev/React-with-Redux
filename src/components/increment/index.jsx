import React from "react";
import PropTypes from 'prop-types';
import Granny from "./granny";

const Increment = ({ onUpdateUserInfo, onClick, names, values = [], person = null }) => {
    const personInfo = `Here is the person info ${person.name} ${person.age} `
    return (
        <>
            <p>{personInfo}</p>
            <button name={names[1]} onClick={onClick}>
                {values[1] || 'Decrement'}
            </button>
            <button name={names[0]} onClick={onClick}>
                {values[0] || 'Increment'}
            </button>
            <hr />
            <Granny person={person} onUpdateUserInfo={onUpdateUserInfo} />
        </>
    )
}

export default React.memo(Increment);

Increment.propTypes = {
    onClick: PropTypes.func.isRequired, // обработчик события - клик по кнопке
    names: PropTypes.array.isRequired, // 
    values: PropTypes.array,
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }),
    onUpdateUserInfo: PropTypes.func,
}