import React from 'react';
import List from '../HocInterview/List'



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
      <List />
    );
  }
}