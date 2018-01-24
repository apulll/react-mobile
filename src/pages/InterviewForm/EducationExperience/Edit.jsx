import React from 'react';
import { List, NavBar, Button, Icon, WingBlank, WhiteSpace } from 'antd-mobile';
import { browserHistory } from 'react-router';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';
import HNavBar from 'components/HNavBar';
import FormItem from '../FormItem';
import mockAxios from 'mocks';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,
    }
  }
  componentDidMount() {
    mockAxios.get('/api/education').then((res)=>{
      this.setState({fieldDatas:res.data})
    })
  }

  onSubmit = ()=>{
    this.props.form.validateFields({ force: true }, (error, value) => {
      console.log(error,value,'aaa')
      mockAxios.put('/api/basicInfo/update').then((res)=>{
        console.log(res,'res put')
      })
    });
  }
  render() {
    const { fieldDatas } = this.state
    return (
      <div>
        <HNavBar 
          title="教育经历编辑" 
          rightContent={
            [
              <span><HIcon type="save" /></span>
            ]
          }
        />
      	<List style={{marginTop:45}}>
          <FormItem form={this.props.form} fieldData={fieldDatas}/>
      	</List>
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank>
          <Button type="primary" onClick={this.onSubmit}>保存</Button>
        </WingBlank>
        <WhiteSpace />
        <WhiteSpace />

      </div>
    );
  }
}

export default createForm()(Edit)