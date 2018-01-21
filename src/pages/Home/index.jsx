import React from 'react';
import { List, InputItem, Button } from 'antd-mobile';
import { Link } from 'react-router';

const Item = List.Item;
const Brief = Item.Brief;

export default class Home extends React.Component {
  
  state = {
    
  }
  
  render() {
    return (
    	<List renderHeader={() => 'Confirm when typing'}>
    	  <InputItem
          editable={false}
          value={this.state.value}
        >姓名：</InputItem>
        <InputItem
        	type="phone"
          editable={false}
          value={this.state.value}
        >手机号码：</InputItem>
        <InputItem
        	type="digit"
          extra={<Button type="primary" size="small" inline="true">获取验证码</Button>}
        >验证码：</InputItem>
        <Link to="/interview"><span><Button type="primary" size="large">提交</Button></span></Link>
      </List>


    );
  }
}