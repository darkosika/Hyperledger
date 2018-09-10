import React, { Component } from 'react';
import '../style/App.css';
import Member from '../containers/Member';
import GetItems from '../containers/GetItems';
class App extends Component {
  render() {
    return (
      <div>
        <Member/>
        <GetItems/>
      </div>
    );
  }
}

export default App;
