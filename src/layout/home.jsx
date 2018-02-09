import React, { Component } from 'react';
import UploadAvatar from '../upload/upload';
import Header from './header';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <UploadAvatar />
        </div>
      </div>
    );
  }
}

export default Home;
