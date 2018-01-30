import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Routes from 'routes';
import registerServiceWorker from './registerServiceWorker';
import API from 'api';
import { getAccessToken } from 'utils';

window.API = API ;
getAccessToken()

ReactDOM.render(
	<Router history={browserHistory}>
      {Routes()}
    </Router>, document.getElementById('root'));
registerServiceWorker();
