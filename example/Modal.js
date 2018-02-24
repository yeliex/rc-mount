import React, { Component } from 'react';
import mount from '../src';

@mount()
export default class Modal extends Component {
  render() {
    return (
      <div>
        123123
        <button onClick={this.props.destroy}>self destroy</button>
      </div>
    );
  }
}