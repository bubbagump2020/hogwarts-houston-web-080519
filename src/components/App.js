import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogCollection from './HogCollection'
import HogSearch from './HogSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogCollection />
          < HogSearch />
      </div>
    )
  }
}

export default App;
