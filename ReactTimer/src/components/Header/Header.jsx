import React, { Component } from 'react';
import './Header.scss';
import Button from '../../UI/Button';
import { ThemeContext } from '../../components/context/themeContext';

class Header extends Component {
    render(){
        return (
            <header className="header">
                <h1>REACT TIMER</h1>
                <ThemeContext.Consumer>
                    {(context) => {
                        const { toggleTheme, bulb } = context;
                        return <Button onClickBtn={toggleTheme} isDisabled={false} title={bulb} />;
                    }}
                </ThemeContext.Consumer>
            </header>
        )
    }
} 

export default Header;