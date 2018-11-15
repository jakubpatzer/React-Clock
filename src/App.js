import React, { Component } from 'react';
import './App.css';
import { Switch } from 'antd'
import 'antd/dist/antd.css';
import Clock from './Components/Clock'


class App extends Component {
    state = {
        visibility: false
    };
    handleSwitch = () => {
        this.setState(prev => ({
            visibility: !prev.visibility
        }))
    };
  render() {
    return (
        <div>
            <div className="panel">
                React Clock
            </div>
            <div className="main">
                <Switch onChange={this.handleSwitch}/>
                <div className="circle">
                    <Clock/>
                    {this.state.visibility && new Date().toLocaleDateString()}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
