import React, { Component } from 'react';
import FlatList from './flat_list';
import Map from './map';

class App extends Component {
  render () {
    return (
      <div className="raw">
        <FlatList />
        <Map />
      </div>
    );
  }
}

export default App;
