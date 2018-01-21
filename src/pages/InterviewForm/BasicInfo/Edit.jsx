import React from 'react';
import { List, NavBar, Button, Icon, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';

const Item = List.Item;

class Edit extends React.Component {

  render() {
    let errors;
    const { getFieldProps, getFieldError } = this.props.form;

    return (
      <div>
      	<div className='mq-nav-bar'>
	      	<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={() => console.log('onLeftClick')}
		      rightContent={[
		        <HIcon type="save"></HIcon>
		      ]}
		    >基本信息编辑
		    </NavBar>
	    </div>
      	<List>
          <input {...getFieldProps('normal')}/>
          <input {...getFieldProps('required', {
            onChange(){}, // have to write original onChange here if you need
            rules: [{required: true}],
          })}/>
          <button onClick={this.submit}>submit</button>
           <InputItem
            {...getFieldProps('autofocus')}
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('bankCard2', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >银行卡</InputItem>
        	
          <Item
            extra={<select><option>1111</option></select>}
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >My wallet</Item>
          
      	</List>
      </div>
    );
  }
}

export default createForm()(Edit)