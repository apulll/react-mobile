import React from 'react';
import { WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';
import HNavBar from 'components/HNavBar';
import InterviewContainer from '../InterviewContainer';
import FormItem from '../FormItem';
import mockAxios from 'mocks';
import fetch from 'utils/fetch';
import { formatFormData } from 'utils';
import basicOriginData from 'mocks/data/basicInfo'
import { resDataFormat, defaultParams } from 'pages/InterviewForm/util'
import { assign } from 'lodash';
import { HocButton } from 'components/Hoc'

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,
        errorMsg:null,
        detail: {},
        loading: false,
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
    const url = API.INTERVIEW_BASIC
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
    this.props.form.validateFields({ force: true }, async (error, value) => {
      this.setState({loading:true,disabled:true})
      if(error){

        this.setState({loading:false,disabled:false})
      }else {

        const fixParams = defaultParams(params, detail)
        value = assign({}, formatFormData(value), fixParams)

        try {
          const newData = await fetch({
                          url:`${API.INTERVIEW_BASIC}/${detail.id}`,
                          method:"put",
                          data:value,
                        })
          this.setState({loading:false,disabled:false})
          newData && Toast.success('资料更新成功', 1);
        }catch(error){
          this.setState({loading:false,disabled:false})
        }
        
      }  
    });
  }
  render() {
    const { fieldDatas, errorMsg, loading } = this.state
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
          <FormItem form={this.props.form} fieldData={fieldDatas}/>
          <WingBlank><div style={{color:'#f76a24'}}>{errorMsg}</div></WingBlank>
          <WhiteSpace />
          <WhiteSpace />
          <WingBlank>
            <HocButton type="primary" onClick={this.onSubmit} loading={loading} disabled={loading}>保存</HocButton>
          </WingBlank>
        </InterviewContainer>
        <WhiteSpace />
        <WhiteSpace />
      </div>
    );
  }
}

export default createForm()(BasicInfo)