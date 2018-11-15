import React from 'react';

const clockStyle = {
    color: 'rgb(103\t218\t249\t)',
    fontSize: '2.3rem',
    fontWeight: 700
};

class Clock extends React.Component {
    state = {
        time: new Date().toLocaleTimeString()
    };
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick = () => {
      this.setState({
          time: new Date().toLocaleTimeString()
      })
    };
    render() {
        return (
            <div style={clockStyle}>
                {this.state.time}
            </div>
        )
    }
}

export default Clock;