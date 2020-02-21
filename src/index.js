import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

window.renderMaterials = (containerId, history) => {
  const container = document.getElementById(containerId);
  ReactDOM.render(<App history={history} />, container);
};

window.unmountMaterials = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
