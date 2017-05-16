import React, { Component } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Greeting from './Greeting';
import dummyData from './dummyData.json';
import dummyStream from './dummyStream.json';
import Time from './Time';
import DataBlocks from './DataBlocks';
import Stream from './Stream';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      stream: {},
      name: ''
    };
  }

  addStream() {
    this.updateData(dummyStream);
  }

  componentDidMount() {
    // Pusher
    const pusher = new Pusher('d1a2deaa33578d481a34', {
      cluster: 'us2',
      encrypted: true
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (response_obj) => {
      this.updateData(response_obj)
    });
  }

  updateData(responseObj) {
    if (responseObj.intent.toLowerCase() === 'summary') {
      this.setState({ data: responseObj, stream: {}, name: responseObj.name })
    } else {
      const { intent, response } = responseObj;
      const stream = { intent, response };
      this.setState({ stream });
    }
  }

  render() {
    return (
      <div className="sidebar">
        {this.state.name !== '' && <Greeting name={this.state.name} />}
        <Time />
        {this.state.name && <DataBlocks {...this.state.data} />}
        {this.state.stream && this.state.stream.response && <Stream {...this.state.stream} />}
      </div>
    );
  }
}

export default App;
