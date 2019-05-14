import { ComponentType } from 'react';

export interface DispatchProps {
    element?: string;
}

declare type destroy = () => void ;

export interface WrappedComponent {
    destroy: destroy,
    show: (options: any) => destroy
}

const Wrapper: (component: ComponentType) => WrappedComponent;

const rcmount: (options?: DispatchProps) => typeof Wrapper;

export default rcmount;
