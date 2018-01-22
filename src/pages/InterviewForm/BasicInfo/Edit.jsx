import React from 'react';
import { List, NavBar, Button, Icon, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';
import fieldData from 'mocks/data/basicInfo';
import FormItem from './FormItem';
import mockAxios from 'mocks';

const Item = List.Item;



class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,
    }
  }
  componentDidMount() {
    mockAxios.get('/api/basicInfo').then((res)=>{
      this.setState({fieldDatas:res.data})
    })
  }

  onSubmit = ()=>{
    this.props.form.validateFields({ force: true }, (error, value) => {
      console.log(error,value,'aaa')
    });
  }
  render() {
    const { fieldDatas } = this.state
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
      	<List style={{marginTop:45}}>
          <FormItem form={this.props.form} fieldData={fieldDatas}/>
          <Item>
            <Button type="primary" onClick={this.onSubmit}>Submit</Button>
          </Item>
      	</List>
      </div>
    );
  }
}

export default createForm()(Edit)