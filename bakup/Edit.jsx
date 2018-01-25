import React from 'react';
import { List, NavBar, Button, Icon, WingBlank, WhiteSpace } from 'antd-mobile';
import { browserHistory } from 'react-router';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';
import HNavBar from 'components/HNavBar';
import FormItem from '../FormItem';
import mockAxios from 'mocks';
import fetch from 'utils/fetch'
import basicDetailData from 'mocks/data/basicInfoRes/detail'
import basicOriginData from 'mocks/data/basicInfo'
import { resDataFormat } from 'pages/InterviewForm/util'

const Item = List.Item;

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,
    }
  }
  componentDidMount() {
    // mockAxios.get('/api/basicInfo').then((res)=>{
    //   this.setState({fieldDatas:res.data})
    // })
    const newData = resDataFormat(basicOriginData, basicDetailData.res.basic, basicDetailData.res.extends)
    this.setState({fieldDatas:newData})
  }

  onSubmit = ()=>{
    this.props.form.validateFields({ force: true }, (error, value) => {
      console.log(error,value,'aaa')
      value.access_token = 'teNIPEZu7yPkyShnwoP9OpXwqw8HUF90jLVcDO5A'
      fetch({
        url:'http://hrmapi.local.com//Api/interview/fill/basic/1',
        method:"put",
        data:value,
      })
      // mockAxios.put('/api/basicInfo/update').then((res)=>{
      //   console.log(res,'res put')
      // })
    });
  }
  render() {
    let errors;
    const { fieldDatas } = this.state

    const { getFieldError } = this.props.form;
    return (
      <div>
        <HNavBar 
          title="基本信息编辑" 
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