import React from 'react';
import Edit from '../HocInterview/Edit';
import emergencyOriginData from 'mocks/data/emergencyContact'

export default class EmergencyEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        list: [],
    }
  }
  componentDidMount() {
    
  }
  render() {
    const { params } = this.props
    return (
      <Edit 
        name = '紧急联系人'
        nameSpace = 'emergency'
        routeUrl = '/emergency'
        params = {params}
        originData = {emergencyOriginData}
        apiUrl = 'INTERVIEW_EMERGENCY'
      />
    );
  }
}