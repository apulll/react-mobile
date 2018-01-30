import React from 'react';
import Add from '../HocInterview/Add';
import familyOriginData from 'mocks/data/familyMember'

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
    const { params } = this.props
    return (
      <Add 
        name='家庭信息'
        routeUrl='/family'
        nameSpace='family'
        params={params}
        apiUrl='INTERVIEW_FAMILY'
        originData = {familyOriginData}
      />
    );
  }
}