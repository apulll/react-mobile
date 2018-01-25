/*
* @Author: perry
* @Date:   2018-01-19 15:30:54
* @Last Modified by:   perry
* @Last Modified time: 2018-01-25 18:18:57
*/
import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'pages/App';
import Home from 'pages/Home';
import Interview from 'pages/InterviewForm';
import InterviewDetail from 'pages/InterviewForm/BasicInfo/Detail';
import InterviewEdit from 'pages/InterviewForm/BasicInfo/Edit';
import EducationExperience from 'pages/InterviewForm/EducationExperience';
import EducationExperienceEdit from 'pages/InterviewForm/EducationExperience/Edit';
import EducationExperienceAdd from 'pages/InterviewForm/EducationExperience/Add';

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
        <Route path="/basic/detail/:template_id/:template_module_id" component={InterviewDetail} />
        <Route path="/basic/edit" component={InterviewEdit} />

        <Route path="/work/:template_id/:template_module_id" component={InterviewDetail} />
        <Route path="/family/:template_id/:template_module_id" component={InterviewDetail} />
        <Route path="/emergency/:template_id/:template_module_id" component={InterviewDetail} />

        <Route path="/educationexperience/:template_id/:template_module_id" component={EducationExperience} />
        <Route path="/educationexperience/edit" component={EducationExperienceEdit} />
        <Route path="/educationexperience/add" component={EducationExperienceAdd} />
      </Route>
    </Route>
)
