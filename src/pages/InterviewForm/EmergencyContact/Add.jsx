import React from 'react';
import Add from '../HocInterview/Add';
import emergencyOriginData from 'mocks/data/emergencyContact'

export default class EducationAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        list: [],
    }
  }
  componentDidMount() {
    
  }
  render() {
    
    return (
      <Add 
        name = '紧急联系人'
        nameSpace = 'emergency'
        routeUrl = '/emergency'
        params = {{'template_id':5, template_module_id:5}}
        originData = {emergencyOriginData}
        apiUrl = 'INTERVIEW_EMERGENCY'
      />
    );
  }
}