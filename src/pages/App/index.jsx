import React from 'react';
import { NavBar, Icon, WingBlank, List, InputItem, Toast, Button } from 'antd-mobile';
import './app.less';
const Item = List.Item;
const Brief = Item.Brief;
export default class App extends React.Component {
  
  state = {
    hasError: false,
    value: '18794772730',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  render() {
    return (
      <div>
      	<div className='mq-nav-bar'>
	      	<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={() => console.log('onLeftClick')}
		    >NavBar
		    </NavBar>
	    </div>
	   	<div className="mq-container">
	   		{this.props.children}
	    </div>
      </div>
    );
  }
}