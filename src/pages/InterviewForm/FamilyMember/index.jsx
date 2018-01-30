import React from 'react';
import List from '../HocInterview/List';


const Item = ({item}) => (
  <div>
    <p>{item.fullName}</p> 
    <p>{item.phone}</p>
  </div>
);

export default class Family extends React.Component {
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
        name='家庭信息'
        routeUrl='/family'
        nameSpace='family'
        params={params}
        apiUrl='INTERVIEW_FAMILY'
        ListItem={Item}
      />
    );
  }
}