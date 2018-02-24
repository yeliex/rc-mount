import React, { createElement } from 'react';
import ReactDom from 'react-dom';

const decorator = (options = {}) => {
  options.element = options.element || 'div';

  return (Component) => {
    const container = window.document.createElement(options.element);
    window.document.body.appendChild(container);

    let rendered = false;

    const destroy = () => {
      if (!rendered) {
        return;
      }
      ReactDom.unmountComponentAtNode(container);
      rendered = false;
    };

    const show = (attributes = {}) => {
      if (rendered) {
        return;
      }
      ReactDom.render(createElement(Component, {
        ...attributes,
        destroy
      }), container);

      rendered = true;

      return destroy;
    };

    return {
      destroy,
      show
    };
  };
};

export default decorator;
