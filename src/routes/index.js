/*
* @Author: perry
* @Date:   2018-01-19 15:30:54
* @Last Modified by:   perry
* @Last Modified time: 2018-01-29 20:45:17
*/
import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'pages/App';
import Login from 'pages/Login';
import Interview from 'pages/InterviewForm';
import BasicInfo from 'pages/InterviewForm/BasicInfo';
import EducationExperience from 'pages/InterviewForm/EducationExperience';
import EducationExperienceEdit from 'pages/InterviewForm/EducationExperience/Edit';
import EducationExperienceAdd from 'pages/InterviewForm/EducationExperience/Add';
//紧急联系人
import Emergency from 'pages/InterviewForm/EmergencyContact';
// import EducationExperienceEdit from 'pages/InterviewForm/EducationExperience/Edit';
// import EducationExperienceAdd from 'pages/InterviewForm/EducationExperience/Add';

import { loginBeforeAction } from 'middleware/auth';

export default ()=> (
  <Route>
      <Route path="/">
        <IndexRedirect to="login" />
        
        <Route path="/login" component={Login} />
        <Route component={App} onEnter={loginBeforeAction}>
            <Route path="/interview" component={Interview} />
            <Route path="/basic/:template_id/:template_module_id" component={BasicInfo} />

            <Route path="/educationexperience/:template_id/:template_module_id" component={EducationExperience} />
            <Route path="/educationexperience/edit/:template_id/:template_module_id/:id" component={EducationExperienceEdit} />
            <Route path="/educationexperience/add/:template_id/:template_module_id" component={EducationExperienceAdd} />

            <Route path="/work/:template_id/:template_module_id" component={BasicInfo} />
            <Route path="/family/:template_id/:template_module_id" component={BasicInfo} />

            <Route path="/emergency/:template_id/:template_module_id" component={Emergency} />
                

            
        </Route>
      </Route>
    </Route>
)
