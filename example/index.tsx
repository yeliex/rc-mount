import { render } from 'react-dom';
import mount, { ComponentMountProps } from '../src';

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

const showModal = mount()(Modal);

const App = () => {
    return (
        <div>
            <button onClick={showModal}>click</button>
        </div>
    );
};

render(<App />, window.document.getElementById('react-root'));
