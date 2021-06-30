import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Input extends Component {
    render() {
        const { onChangeInput, value, placeholder} = this.props;
        return (
            <input type="text" onChange={onChangeInput} value={value} placeholder={placeholder} />
        )
    }
}

Input.propTypes = {
    onChangeInput: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
}

export default Input;
