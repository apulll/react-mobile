import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Router, Route, browserHistory} from 'react-router';
import Routes from 'routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={browserHistory}>
      {Routes()}
    </Router>, document.getElementById('root'));
registerServiceWorker();
