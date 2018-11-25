import React, { Component } from 'react';

import TrackingPage from './components/TrackingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TrackingPage />
        </header>
      </div>
    );
  }
}

export default App;
