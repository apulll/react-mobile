import React from 'react';
import Add from '../HocInterview/Add';
import workOriginData from 'mocks/data/workexperience'

export default class WorkAdd extends React.Component {
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