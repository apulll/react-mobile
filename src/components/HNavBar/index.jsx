import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
// import HIcon from 'components/HIcon';

const HNavBar = (props) => {
  const { title, hasLeft, rightContent } = props;
  return (
    <div className='mq-nav-bar'>
      <NavBar
        mode="light"
        icon={hasLeft ? <Icon type="left" /> : ''}
        onLeftClick={() => browserHistory.go(-1)}
        rightContent={rightContent}
      >{title}
      </NavBar>
    </div>
  )
}
HNavBar.propTypes = {
	title : PropTypes.string,
	hasLeft : PropTypes.bool,
	rightContent : PropTypes.any,
}

HNavBar.defaultProps = {  
	title : '',
	hasLeft : true,
	rightContent : '', 
}

export default HNavBar;