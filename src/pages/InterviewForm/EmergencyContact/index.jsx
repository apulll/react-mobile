import React from 'react';
import List from '../HocInterview/List';

const Item = ({item}) => (
  <div>
    <p>{item.school}</p> 
    <p><span>{item.major}</span>-<span>{item.culture_type_text}</span></p>
    <p>{item.start_at}至{item.end_at}</p>
  </div>
);



export default class Education extends React.Component {
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
      <List 
        name='紧急联系人'
        routeUrl='/emergency'
        nameSpace='emergency'
        params={{'template_id':5, template_module_id:5}}
        apiUrl='INTERVIEW_EMERGENCY'
        extra={Item}
      />
    );
  }
}