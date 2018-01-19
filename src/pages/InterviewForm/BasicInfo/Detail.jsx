import React from 'react';
import { List, NavBar, Icon } from 'antd-mobile';
import HIcon from 'components/HIcon';

const Item = List.Item;

export default class Detail extends React.Component {

  render() {
    return (
      <div>
      	<div className='mq-nav-bar'>
	      	<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={() => console.log('onLeftClick')}
		      rightContent={[
		        <HIcon type="edit"></HIcon>
		      ]}
		    >基本信息
		    </NavBar>
	    </div>
      	<List>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
        	<Item extra={'extra content'} arrow="empty">Title</Item>
      	</List>
      </div>
    );
  }
}