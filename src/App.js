import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import React from 'react';
import { Router } from 'react-router-dom';

import Materials from './container/Materials';

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => <Router history={history}><Materials /></Router>;

App.propTypes = {
  history: PropTypes.any,
};

export default App;
