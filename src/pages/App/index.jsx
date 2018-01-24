import React from 'react';
import { NavBar, Icon, Toast} from 'antd-mobile';
import './app.less';

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
      	{/*<div className='mq-nav-bar'>
	      	<NavBar
  		      mode="light"
  		      icon={<Icon type="left" />}
  		      onLeftClick={() => console.log('onLeftClick')}
  		    >NavBar
  		    </NavBar>
	    </div>*/}
	   	<div className="mq-container">
	   		{this.props.children}
	    </div>
      </div>
    );
  }
}