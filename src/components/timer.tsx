import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
    startTime?: Date
}
interface State {
    spentTime: number,
}
export default class Timer extends Component<Props, State> {
    state = {
        spentTime: 0
    }
    timer: number = 0;

    componentDidMount() {
        this.startTimer();
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    startTimer = () => {
        const { startTime = new Date() } = this.props;
        const nowDate = new Date();
        const spentTime = Math.floor((nowDate.getTime() - startTime.getTime()) / 1000) + 1;
        this.setState({ spentTime }, () => {
            this.timer = setTimeout(() => {
                this.startTimer();
            }, 1000);
        });
    }
    render() {
        const { spentTime } = this.state;
        return (
            <Text style={[styles.timerText,{}]} >{`${(Math.floor(spentTime / 60)).toString().padStart(2, "0")}:${(spentTime % 60).toString().padStart(2, "0")}`}</Text>
        );
    }
}

const styles = StyleSheet.create({
    timerText: {
        flex: 1, 
        fontWeight:"800",
        fontSize: 28, 
        textAlign: "center", 
        padding: 10,
        color:"white"
    }
});