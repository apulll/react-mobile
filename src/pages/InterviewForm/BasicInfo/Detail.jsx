import React from 'react';
import { Link } from 'react-router';
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
		        <Link to="/interview/edit" key="3"> <HIcon type="edit" ></HIcon></Link>
		      ]}
		    >基本信息
		    </NavBar>
	    </div>
      	<List>
          <Item key="1" extra={'extra content'} arrow="empty">Title</Item>
          <Item key="2" extra={'extra content'} arrow="empty">Title</Item>
          <Item key="3" extra={'extra content'} arrow="empty">Title</Item>
        	<Item key="4" extra={'extra content'} arrow="empty">Title</Item>
        	
      	</List>
      </div>
    );
  }
}