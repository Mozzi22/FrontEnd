import React, {Component} from 'react';
import './Timer.scss';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '00:00:00',
            setBtnDisabled: true,
            startBrnDisabled: true,
            stopButtonDisabled: true,
            resetBtnDisabled: true,
            startTime: '',
            realTime: 0,
            interval: null,
        };
    }

    timerCounter = (realTime) => {
        let hours = Math.floor((realTime / 60) / 60);
        let minutes = Math.floor(realTime / 60 % 60);
        let seconds = realTime % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        hours = hours < 10 ? `0${hours}` : hours;
        return `${hours}:${minutes}:${seconds}`;
    }

    handleSetTime = () => {
        const { startTime } = this.state;
        if (!Number(startTime)) return NotificationManager.error('Expect only numbers in input', 'Input Error!', 5000);
        if (Number(startTime) > 86400) return (
            kjk
        );
        this.setState({
            realTime: Number(startTime),
            startTime: '',
            startBrnDisabled: false,
            stopButtonDisabled: false,
            resetBtnDisabled: false,
            time: this.timerCounter(startTime),
            setBtnDisabled: true,
        });
    }

    handleOnChange = (e) => {
        this.setState({ startTime: e.target.value, setBtnDisabled: false });
    }

    handleOnStart = () => {
        const newInterval = setInterval(() => {
            const { realTime } = this.state;
            if (realTime === 0) {
                this.handleOnReset();
                return NotificationManager.info('Time is over', 'Info', 5000);
            }
            this.setState((state) => ({
                realTime: state.realTime - 1,
                time: this.timerCounter(state.realTime),
                interval: newInterval,
                startBrnDisabled: true,
                stopButtonDisabled: false,

            }));
        }, 1000);
    }

    handleOnStop = () => {
        const { interval } = this.state;
        clearInterval(interval);
        this.setState({ interval: null, startBrnDisabled: false, stopButtonDisabled: true });
    }

    handleOnReset = () => {
        const { interval } = this.state;
        clearInterval(interval);
        this.setState({
            interval: null,
            setBtnDisabled: true,
            startBrnDisabled: true,
            stopButtonDisabled: true,
            resetBtnDisabled: true,
            startTime: '',
            realTime: 0,
            time: '00:00:00',
        });
    }

    render() {
        const { time, startTime, setBtnDisabled, stopButtonDisabled, resetBtnDisabled, startBrnDisabled } = this.state;
        return (
            <div className="timer">
                <p className="timer__tablo">{time}</p>
                <div className="timer__controll-set">
                    <Input placeholder='Enter time in sec' onChangeInput={this.handleOnChange} value={startTime} />
                    <Button onClickBtn={this.handleSetTime} title="Set" isDisabled={setBtnDisabled} />
                </div>
                <div className="timer__controll-operations">
                    <Button onClickBtn={this.handleOnStop} title="Stop" isDisabled={stopButtonDisabled} />
                    <Button onClickBtn={this.handleOnStart} title="Start" isDisabled={startBrnDisabled} />
                    <Button onClickBtn={this.handleOnReset} title="Reset" isDisabled={resetBtnDisabled} />
                </div>
                <NotificationContainer />
            </div>
        );
    }
}

export default Timer;
