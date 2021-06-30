import React, { Component } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const { onClickBtn, title, isDisabled } = this.props;
        return (
            <button onClick={onClickBtn} disabled={isDisabled}>{title}</button>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;
