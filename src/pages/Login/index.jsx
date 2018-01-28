import React from 'react';
import { List, InputItem, Button, WingBlank, WhiteSpace, Modal, Flex } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';
import { isEmpty, assign } from 'lodash';
import HNavBar from 'components/HNavBar';
import { setDomainCookie, defaultParams } from 'pages/InterviewForm/util';
import fetch from 'utils/fetch';
import './index.less';
// import ENV from 'ENV';
const FlexItem = Flex.Item

class Home extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {  
      visible:false,
      info:{
        company_name:'',
        fullName:'',
        mobile:'',
      },
      code:null,
      captcha:null,
      captchaCode:null,
      snsDisabled:true,
      endOfTimer: false,//倒计时判断
      // submit params
      loading:false,
      disabled:false,
    }
  }
  componentWillMount() {
    this.getInviteInfo()
    this.getCaptcha()
  }
  componentDidMount(){
    // console.log(ENV,'env')
    
    // this.getInviteInfo()
    // !isEmpty(query) && this.setState({query})
    // getAccessToken()
  }

  getInviteInfo = async () =>{
    const query = this.props.location.query
    const url = `http://hrmapi.dev.mila66.com/Api/recruitment/interview/inviteInfoh5`
    if(!isEmpty(query)) {
     
      try{
         const newData = await fetch({
                              url:url,
                              data:{
                                access_token:'P8h8wNgVA2BgnZ90vmuYArEITpZH4HRTr1VPOx2D',
                                company_id:query.company_id,
                                invitation_id:query.invitation_id
                              }
                            })
        console.log(newData)
        if(newData){
          const info = newData.res

          this.setState({info})
          setDomainCookie(assign({}, info, {invitation_id:query.invitation_id}))
        }
      }catch(error){
        console.log(error,'error ===')
      }
    }
  }
  getCaptcha = async () =>  {
    const url = `/localapi/getCaptcha`;
    // const {mobile} = this.state;
    try{
      const newData = await fetch({
                              url:url
                            })
      if(newData){
          const data = newData.res
          // console.log(data)
          this.setState({captcha:data})
        }
    }catch(error){

    }
  }
  changeCaptcha = (value)=> {

    // this.state.captcha && 
    if(value.toLowerCase() === this.state.captcha.text.toLowerCase()) {
        this.setState({captchaCode:value,snsDisabled:false})

    }else{
      this.setState({captchaCode:null,snsDisabled:true})
    }
  }
  getCode = async (e)=> {
    this.setState({visible:true, captchaCode:null, snsDisabled:true,})
  }
  getSnsCode = async ()=> {
    const url = `http://hrmapi.local.com/Api/interview/fill/sms`;
    const {mobile} = this.state.info;
    try{
      const newData = null 
      // await fetch({
      //                         url:url,
      //                         data:{
      //                           access_token:'P8h8wNgVA2BgnZ90vmuYArEITpZH4HRTr1VPOx2D',
      //                           mobile:mobile,
      //                         }
      //                       })
      if(!newData){
          // const info = newData.res
          //获取短信验证码成功后，自动关闭弹框
          this.setState({visible:false, captchaCode:null, snsDisabled:true,endOfTimer:true})
          // this.setState({code})
        }
    }catch(error){

    }
  }
  onClose = () => {
    this.setState({visible:false})
  }
  submitHandle = ()=> {
    // const { detail } = this.state
    // const { params } = this.props
    this.props.form.validateFields({ force: true }, async (error, value) => {
      this.setState({loading:true,disabled:true})
      console.log(value,'value')
      if(error){
        // const errorMsg = formErrorsMsg(error)
        // this.setState({errorMsg})
        this.setState({loading:false,disabled:false})
      }else {
        // this.setState({errorMsg:''})
        
        const fixParams = defaultParams()
        value = assign({}, value, fixParams)

        try {
          const newData = await fetch({
                          url:`http://hrmapi.local.com/Api/interview/fill/login`,
                          method:"post",
                          data:value,
                        }) 
          this.setState({loading:false,disabled:false})
        }catch(error){
          this.setState({loading:false,disabled:false})
        }
        
      }  
    });
  }
  render() {
    const { info, visible, captcha, snsDisabled, loading, disabled, endOfTimer } = this.state;
    const { getFieldProps } = this.props.form;
    
    const endOfTimerTxt = endOfTimer ? "120s" : '获取验证码'
    return (
      <div>
      <HNavBar 
          title="面试登记表"
          hasLeft={false}
      />
      <div style={{marginTop:45}}>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        
        <WhiteSpace />
        <div>
          <h3 className="hq-login-info">{info.company_name}</h3>
          <p className="hq-login-info">邀请您填写面试登记表</p>
          
        </div>
        <WhiteSpace />
        <WhiteSpace />
      	<List className="hq-login-list">
          
      	  <InputItem
            {...getFieldProps('name',{
              initialValue: info.fullName,
              rules: [{required: true, message: `不可为空`}],
            })}
            editable={false}
          >姓名</InputItem>
          <InputItem
            {...getFieldProps('mobile',{
              initialValue: info.mobile,
              rules: [{required: true, message: `不可为空`}],
            })}
            editable={false}
          >手机号码</InputItem>
          <InputItem
          	type="digit"
            {...getFieldProps('code',{
              initialValue: '',
              rules: [{required: true, message: `不可为空`}],
            })}
            extra={<Button type="primary" size="small" inline="true" onClick={this.getCode} disabled={endOfTimer}>{endOfTimerTxt}</Button>}
          >验证码</InputItem>

        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank><span><Button type="primary"  onClick={this.submitHandle} loading={loading} disabled={disabled}>提交</Button></span></WingBlank>

        <Modal
          visible={visible}
          transparent
          maskClosable={true}
          >
            <div>
              <Flex>
                <FlexItem>
                  <InputItem
                    onChange={this.changeCaptcha}
                    placeholder="请填写验证码"
                    maxLength={4}
                  />
                </FlexItem>
                <FlexItem>
                  <div  onClick={this.getCaptcha}  dangerouslySetInnerHTML={{__html: captcha?captcha.data:''}} />
                </FlexItem>
              </Flex>
              <WhiteSpace />
              <Button onClick={this.getSnsCode} type="primary" disabled={snsDisabled}>获取短信验证码</Button>
              <WhiteSpace />
              <Button onClick={this.onClose}>关闭</Button>
            </div>
        </Modal>

        
      </div>
      </div>
    );
  }
}

export default createForm()(Home)