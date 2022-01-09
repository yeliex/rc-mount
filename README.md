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

## Install

```bash
yarn add rc-mount
# OR
npm i --save rc-mount
```

## Usage

```typescript jsx
// Modal.tsx
import mount, { ComponentMountProps } from 'rc-mount';

interface IProps {
    value: string;
}

const Modal = (props: IProps & ComponentMountProps<string>) => {
    const handleClick = () => {
        props.resolve(props.value);

        setTimeout(() => {
            props.destroy();
        }, 300);
    };

    return (
        <div>
            <p>{props.value}</p>
            <button onClick={handleClick}>click</button>
        </div>
    );
};

export const show = mount()(Modal);

export default Modal;

// index.tsx
import { show as showModal } from './Modal.js';

const res = await showModal();

// OR
const promise = showModal();

promise.destroy();

await promise;
```

## ```mount(options:Object)=>(WrappedComponent: React.Component)=>React.Component```

| option | description | type | default |
| --- | --- | --- | --- |
| element | render container | string | div |
