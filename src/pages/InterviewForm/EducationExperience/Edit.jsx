import React from 'react';
import { List, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';
import HNavBar from 'components/HNavBar';
import InterviewContainer from '../InterviewContainer';
import FormItem from '../FormItem';
import mockAxios from 'mocks';
import { resDataFormat, formErrorsMsg, defaultParams } from 'pages/InterviewForm/util';
import educationOriginData from 'mocks/data/education';
import fetch from 'utils/fetch';
import { formatFormData } from 'utils';
import { assign } from 'lodash';
import { HocButton } from 'components/Hoc'

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,

        res:null,
        loading:false,
    }
  }
  componentWillMount() {
    this.mockGet()
  }
  componentDidMount() {
    this.getEducationDetail()
  }
  mockGet = ()=> {
    mockAxios.get('/api/education').then((res)=>{
      this.setState({fieldDatas:res.data})
    })
  }
  getEducationDetail = async ()=> {
    
    const { params } = this.props
    const url = API.INTERVIEW_EDUCATION;
    const requestParams = assign({},defaultParams(params),{id:params.id})
    console.log(url,'url ====')
    try {
      const newData = await fetch({url:url,data:requestParams})
      // const basicDetailData = res.data.res
      const fieldDatas = resDataFormat(educationOriginData, newData.res.education, newData.res.extends)
      this.setState({fieldDatas})

      // this.setState({list:newData.res})

    }catch(error){
      // this.setState({loading:false,disabled:false})
    }
  }
  onSubmit = ()=>{

    const { params } = this.props
    this.props.form.validateFields({ force: true }, async (error, value) => {
      this.setState({loading:true,disabled:true})
      if(error){
        // const errorMsg = formErrorsMsg(error)
        // this.setState({errorMsg})
        this.setState({loading:false,disabled:false})
      }else {
        this.setState({errorMsg:''})
        
        const fixParams = defaultParams(params)
        value = assign({}, formatFormData(value), fixParams)

        try {
          const newData = await fetch({
                          url:`${API.INTERVIEW_EDUCATION}/${params.id}`,
                          method:"put",
                          data:value,
                        })
          this.setState({loading:false,disabled:false})
          Toast.success('资料更新成功', 1);
        }catch(error){
          this.setState({loading:false,disabled:false})
        }
        
      }  
    });
  }
  render() {
    const { fieldDatas, loading } = this.state
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
        <InterviewContainer>
        
          <FormItem form={this.props.form} fieldData={fieldDatas} isAdd />
        
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank>
          <HocButton type="primary" onClick={this.onSubmit} loading={loading} disabled={loading}>保存</HocButton>
        </WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        </InterviewContainer>
      </div>
    );
  }
}

export default createForm()(Edit)