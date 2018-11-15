import React, { Component } from 'react';
import './App.css';
import { Switch } from 'antd'
import 'antd/dist/antd.css';


class App extends Component {
  render() {
    return (
        <div>
            <div className="panel">
                React Clock
            </div>
            <div className="main">
                <Switch />
                <div className="circle">

                </div>
            </div>
        </div>
    );
  }
}

export default App;
