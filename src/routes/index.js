/*
* @Author: perry
* @Date:   2018-01-19 15:30:54
* @Last Modified by:   perry
* @Last Modified time: 2018-01-19 17:19:21
*/
import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'pages/App';
import Home from 'pages/Home';
import Interview from 'pages/InterviewForm';
import InterviewDetail from 'pages/InterviewForm/BasicInfo/Detail';
import InterviewEdit from 'pages/InterviewForm/BasicInfo/Edit';


export default ()=> (
  <Route>
      <Route path="/">
        <IndexRedirect to="home" />
        <Route component={App}>
        	{/*<Route path="/home" component={Home} />
        	<Route path="/interview" component={Interview} />*/}
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/interview" component={Interview} />
        <Route path="/interview/detail" component={InterviewDetail} />
        <Route path="/interview/edit" component={InterviewEdit} />
      </Route>
    </Route>
)
