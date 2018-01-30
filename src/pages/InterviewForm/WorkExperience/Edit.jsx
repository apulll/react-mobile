import React from 'react';
import Edit from '../HocInterview/Edit';
import workOriginData from 'mocks/data/workexperience'

export default class WorkEdit extends React.Component {
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
    console.log(params,'params')
    return (
      <Edit 
        name='工作信息'
        routeUrl='/work'
        nameSpace='work'
        params={params}
        apiUrl='INTERVIEW_WORK'
        originData = {workOriginData}
      />
    );
  }
}