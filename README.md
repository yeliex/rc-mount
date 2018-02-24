# rc-mount
react extra component mount decorator

[![NPM version][npm-image]][npm-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-mount.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-mount
[gemnasium-image]: http://img.shields.io/gemnasium/yeliex/rc-mount.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/yeliex/rc-mount
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-mount.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-mount

## Development
```
yarn
npm start
open http://localhost:3000
```

## Install
[![](https://nodei.co/npm/rc-mount.png)](https://www.npmjs.com/package/rc-mount)

## Usage
```
// Modal.js
import React, { Component } from 'react';
impot mount from 'rc-mount';

@mount()
export default class Modal extends Component {
  render() {
    return (
      <div>
        This is modal content
        <button onClick={this.props.destroy}>关闭</button>
      </div>
    );
  }
}

// index.js
import Modal from './Modal.js';
Modal.show();
Modal.destroy()'
```

## ```decorator(options:Object)=>(WrappedComponent: React.Component)=>React.Component```

| option | description | type | default |
| --- | --- | --- | --- |
| element | render container | string | div |


```
return {
  show: (props)=>destroy,
  destroy: null
}
```
