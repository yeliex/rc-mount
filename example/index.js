import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { show, destroy } from './Modal';

class App extends Component {
  handleShow = () => {
    show();
  };

  handleDestroy = () => {
    destroy();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>show</button>
        <button onClick={this.handleDestroy}>hide</button>
      </div>
    );
  }
}

ReactDom.render(<App />, window.document.getElementById('react-root'));
