import React from 'react'
import { Button } from 'antd-mobile';
import HocWrapper from './HocWrapper'

export const HocButton = HocWrapper(class extends React.Component{
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
  }
  render(){

    const props = this.props;

    // const [auth,others] = splitObject(props, ['auth']);

    return (
      <Button  {...props}/>
    );
  }
});



