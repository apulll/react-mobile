import React from 'react';
import { List, InputItem, Button } from 'antd-mobile';
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
            extra={<Button type="primary" size="small">获取验证码</Button>}
          >验证码：</InputItem>
        </List>
    );
  }
}