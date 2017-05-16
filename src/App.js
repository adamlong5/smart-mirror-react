import React, { Component } from 'react';
import Pusher from 'pusher-js';
// import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import dummyData from './dummyData.json';
import Time from './Time';
import DataBlocks from './DataBlocks';

class App extends Component {
  constructor() {
    super()
    this.state = dummyData;
  }

  componentDidMount() {
    // Pusher
    // const pusher = new Pusher('d1a2deaa33578d481a34', {
    //   cluster: 'us2',
    //   encrypted: true
    // });
    //
    // const channel = pusher.subscribe('my-channel');
    // channel.bind('my-event', function(response_obj) {
    //   this.setState(response_obj)
    // });
  }

  render() {
    return (
      <div className="sidebar">
        {this.state.name !== '' && <Greeting name={this.state.name} />}
        <Time />
        <DataBlocks {...this.state} />
      </div>
    );
  }
}

export default App;
