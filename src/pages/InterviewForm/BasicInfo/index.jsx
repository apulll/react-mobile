import React from 'react';
import { List, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';
import HNavBar from 'components/HNavBar';
import InterviewContainer from '../InterviewContainer';
import FormItem from '../FormItem';
import mockAxios from 'mocks';
import fetch from 'utils/fetch';
import { formatFormData } from 'utils';
import basicOriginData from 'mocks/data/basicInfo'
import { resDataFormat, formErrorsMsg, defaultParams } from 'pages/InterviewForm/util'
import { assign } from 'lodash';
import { HocButton } from 'components/Hoc'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,
        errorMsg:null,
        detail: {},
    }
  }
  componentWillMount() {
    // this.getBasicInfo()
  }
  componentDidMount() {
    this.getBasicInfo()
    
  }
  //正式请求后暂时弃用模拟数据调用
  mockGet = ()=> {
    mockAxios.get('/api/basicInfo/detail').then((res)=>{
      const basicDetailData = res.data.res
      const newData = resDataFormat(basicOriginData, basicDetailData.basic, basicDetailData.extends)
      this.setState({fieldDatas:newData,detail:basicDetailData.basic})
    })
  }
  getBasicInfo = async () => {
    
    const { params } = this.props
    const url = `http://hrmapi.dev.mila66.com/Api/interview/fill/basic`
    const requestParams = defaultParams(params)
    try {
      const newData = await fetch({url:url,data:requestParams})
      if(newData){
        const basicDetailData = newData.res
        const resData = resDataFormat(basicOriginData, basicDetailData.basic, basicDetailData.extends)
        this.setState({fieldDatas:resData,detail:basicDetailData.basic})
      }
    }catch(error){

    }
    

  }
  onSubmit = ()=>{
    const { detail } = this.state
    const { params } = this.props
    this.props.form.validateFields({ force: true }, (error, value) => {
      if(error){
        const errorMsg = formErrorsMsg(error)
        this.setState({errorMsg})
      }else {
        this.setState({errorMsg:''})
        console.log(value,'value submit')
        const fixParams = defaultParams(params, detail)
        value = assign({}, formatFormData(value), fixParams)

        fetch({
          url:`http://hrmapi.local.com/Api/interview/fill/basic/${detail.id}`,
          method:"put",
          data:value,
        })
      }  
    });
  }
  render() {
    const { fieldDatas, errorMsg } = this.state
    return (
      <div>
        <HNavBar 
          title="基本信息编辑" 
          rightContent={
            [
              <span key='5'><HIcon type="save" /></span>
            ]
          }
        />
        <InterviewContainer>
          <List>
            <FormItem form={this.props.form} fieldData={fieldDatas}/>
          </List>
          <WingBlank><div style={{color:'#f76a24'}}>{errorMsg}</div></WingBlank>
          <WhiteSpace />
          <WhiteSpace />
          <WingBlank>
            <HocButton type="primary" onClick={this.onSubmit}>保存</HocButton>
          </WingBlank>
        </InterviewContainer>
        <WhiteSpace />
        <WhiteSpace />
      </div>
    );
  }
}

export default createForm()(BasicInfo)