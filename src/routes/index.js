/*
* @Author: perry
* @Date:   2018-01-19 15:30:54
* @Last Modified by:   perry
* @Last Modified time: 2018-01-30 11:00:48
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
import EmergencyAdd from 'pages/InterviewForm/EmergencyContact/Add';
import EmergencyEdit from 'pages/InterviewForm/EmergencyContact/Edit';
//工作经历
import WorkExperience from 'pages/InterviewForm/WorkExperience';
import WorkExperienceAdd from 'pages/InterviewForm/WorkExperience/Add';
import WorkExperienceEdit from 'pages/InterviewForm/WorkExperience/Edit';
//家庭成员
import FamilyMember from 'pages/InterviewForm/FamilyMember';
import FamilyMemberAdd from 'pages/InterviewForm/FamilyMember/Add';
import FamilyMemberEdit from 'pages/InterviewForm/FamilyMember/Edit';
// import EmergencyAdd from 'pages/InterviewForm/EmergencyContact/Add';
// import EmergencyEdit from 'pages/InterviewForm/EmergencyContact/Edit';
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

            <Route path="/work/:template_id/:template_module_id" component={WorkExperience} />
            <Route path="/work/add/:template_id/:template_module_id" component={WorkExperienceAdd} />
            <Route path="/work/edit/:template_id/:template_module_id/:id" component={WorkExperienceEdit} />
            
            <Route path="/family/:template_id/:template_module_id" component={FamilyMember} />
            <Route path="/family/add/:template_id/:template_module_id" component={FamilyMemberAdd} />
            <Route path="/family/edit/:template_id/:template_module_id/:id" component={FamilyMemberEdit} />

            <Route path="/emergency/:template_id/:template_module_id" component={Emergency} />
            <Route path="/emergency/add/:template_id/:template_module_id" component={EmergencyAdd} />
            <Route path="/emergency/edit/:template_id/:template_module_id/:id" component={EmergencyEdit} />
                

            
        </Route>
      </Route>
    </Route>
)
