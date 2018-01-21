import React from 'react';
import { List, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import { browserHistory } from 'react-router';
const Item = List.Item;
const Brief = Item.Brief;

export default class Interview extends React.Component {
  
  state = {
    disabled: false,
  }
  render() {
    return (
      <div>
      	<div className='mq-nav-bar'>
	      	<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={() => browserHistory.go('-1')}
		    >NavBar
		    </NavBar>
	    </div>
      	<WhiteSpace size="lg" />
      	<WhiteSpace size="lg" />
      	<WhiteSpace size="lg" />
      	<WhiteSpace size="lg" />
	    <List className="my-list">
	        <Item
	          arrow="horizontal"
	          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
	          multipleLine
	          onClick={() => {browserHistory.push('/interview/detail')}}
	          extra="555"
	        >
	          基本信息<Brief>subtitle</Brief>
	        </Item>
      	</List>
      	<List className="my-list">
	        <Item
	          arrow="horizontal"
	          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
	          multipleLine
	          onClick={() => {}}
	        >
	          教育经历<Brief>subtitle</Brief>
	        </Item>
      	</List>
      	<List className="my-list">
	        <Item
	          arrow="horizontal"
	          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
	          multipleLine
	          onClick={() => {}}
	        >
	          工作经历<Brief>subtitle</Brief>
	        </Item>
      	</List>
      	<List className="my-list">
	        <Item
	          arrow="horizontal"
	          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
	          multipleLine
	          onClick={() => {}}
	        >
	          紧急联系人<Brief>subtitle</Brief>
	        </Item>
      	</List>
	    
      </div>
    );
  }
}