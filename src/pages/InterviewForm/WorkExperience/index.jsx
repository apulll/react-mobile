import React from 'react';
import List from '../HocInterview/List';

const Item = ({item}) => (
  <div>
    <p>{item.company_name}</p> 
    <p>{item.designation}</p>
    <p>{item.start_at}至{item.end_at}</p>
  </div>
);


export default class Work extends React.Component {
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
      <List 
        name='工作信息'
        routeUrl='/work'
        nameSpace='work'
        params={params}
        apiUrl='INTERVIEW_WORK'
        ListItem={Item}
      />
    );
  }
}