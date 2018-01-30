import React from 'react';
import Edit from '../HocInterview/Edit';
import familyOriginData from 'mocks/data/familyMember'

export default class FamilyEdit extends React.Component {
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