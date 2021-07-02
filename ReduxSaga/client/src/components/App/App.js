import React from 'react';
import Header from '../Header';
import Movies from '../Movies';
import './App.scss';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const App = () => (
    <div className='app'>
        <Header />
        <Movies />
        <NotificationContainer />
    </div>
);

export default App;
