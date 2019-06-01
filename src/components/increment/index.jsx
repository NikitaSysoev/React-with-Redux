import React from "react";
import PropTypes from 'prop-types';

const Increment = ({ onClick, names, values = [] }) => {
    return (
        <>
            <button name={names[1]} onClick={onClick}>
                {values[1] || 'Decrement'}
            </button>
            <button name={names[0]} onClick={onClick}>
                {values[0] || 'Increment'}
            </button>
        </>
    )
}

export default Increment;

Increment.propTypes = {
    onClick: PropTypes.func.isRequired, // обработчик события - клик по кнопке
    names: PropTypes.array.isRequired, // 
    values: PropTypes.array
}