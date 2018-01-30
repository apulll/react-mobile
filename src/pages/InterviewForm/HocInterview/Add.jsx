import React from 'react';
import { WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import HIcon from 'components/HIcon';
import HNavBar from 'components/HNavBar';
import InterviewContainer from '../InterviewContainer';
import FormItem from '../FormItem';
import mockAxios from 'mocks';
import { resDataFormat, defaultParams } from 'pages/InterviewForm/util';
import educationOriginData from 'mocks/data/education';
import fetch from 'utils/fetch';
import { formatFormData } from 'utils';
import { assign } from 'lodash';
import { HocButton } from 'components/Hoc'
import PropTypes from 'prop-types';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,

        res:null,
        loading:false,
    }
  }
  componentWillMount() {
    // this.mockGet()
  }
  componentDidMount() {
    this.getList()
  }
  mockGet = ()=> {
    const { nameSpace } = this.props
    const apiUrl = `/api/${nameSpace}`
    mockAxios.get(apiUrl).then((res)=>{
      this.setState({fieldDatas:res.data})
    })
  }
  getList = async ()=> {
    
    const { params, apiUrl, originData } = this.props
    const url = API[apiUrl];
    const requestParams = defaultParams(params)
    try {
      const newData = await fetch({url:url,data:requestParams})
      const fieldDatas = resDataFormat(originData, {}, newData.res.extends, true)
      this.setState({fieldDatas})

      // this.setState({list:newData.res})

    }catch(error){
      // this.setState({loading:false,disabled:false})
    }
  }
  onSubmit = ()=>{

    const { params, apiUrl } = this.props
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
                          url:API[apiUrl],
                          method:"post",
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
    const { fieldDatas, loading } = this.state
    const { name } = this.props
    return (
      <div>
        <HNavBar 
          title={name} 
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
Add.propTypes = {
  name : PropTypes.string,
  routeUrl : PropTypes.string,
  params : PropTypes.object,
  originData : PropTypes.array,
  apiUrl : PropTypes.string
}

Add.defaultProps = {  
  name:'教育经历',
  nameSpace:'education',
  routeUrl:'/educationexperience',
  params:{'template_id':5, template_module_id:2},
  originData:educationOriginData,
  apiUrl:'INTERVIEW_EDUCATION',
}


export default createForm()(Add)