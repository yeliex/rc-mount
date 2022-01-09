import { ComponentType, createElement } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

interface IProps {
    element?: string;
}

export interface ComponentMountProps<R = any> {
    destroy: () => void;
    resolve: (value: R) => void;
    reject: (error?: unknown) => void;
}

export type RenderResponse<R> = Promise<R> & {
    destroy: ComponentMountProps<any>['destroy'];
}

const mount = <R = any, P = any>(options: IProps = {}) => {
    const { element = 'div' } = options;

    return (Component: ComponentType<P & ComponentMountProps<R>>) => {
        const componentName = Component.displayName || Component.name;

        return (attributes: P): RenderResponse<R> => {
            let container = window.document.createElement(element);
            componentName && container.setAttribute('data-is', componentName);
            window.document.body.appendChild(container);

            const destroy = () => {
                if (!container) {
                    return;
                }

                unmountComponentAtNode(container);
                window.document.body.removeChild(container);

                (container as any) = null;
            };

            const promise = new Promise<R>((resolve, reject) => {
                render(createElement(Component, {
                    ...(attributes || {}),
                    destroy,
                    resolve,
                    reject,
                } as any), container);
            });

            Object.defineProperty(promise, 'destroy', {
                value: destroy,
                writable: false,
                enumerable: false,
                configurable: false,
            });

            return promise as RenderResponse<R>;
        };
    };
};

export default mount;
