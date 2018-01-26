import React from 'react';
import { List, InputItem, Button, WingBlank, WhiteSpace  } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';
import { isEmpty, assign } from 'lodash';
import HNavBar from 'components/HNavBar';
import { setDomainCookie } from 'pages/InterviewForm/util';
import fetch from 'utils/fetch';
import './index.less';
// import ENV from 'ENV';

class Home extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {  
      info:{
        company_name:'',
        fullName:'',
        mobile:'',
      },
      code:null,
    }
  }
  componentWillMount() {
    this.getInviteInfo()
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
  getCode = async (e)=> {
    const url = `http://hrmapi.local.com/Api/interview/fill`;
    const {mobile} = this.state;
    try{
      const newData = await fetch({
                              url:url,
                              data:{
                                access_token:'P8h8wNgVA2BgnZ90vmuYArEITpZH4HRTr1VPOx2D',
                                mobile:mobile,
                              }
                            })
      if(newData){
          const info = newData.res

          // this.setState({code})
        }
    }catch(error){

    }
  }
  render() {
    const { info } = this.state;
    const { getFieldProps } = this.props.form;
    console.log(this.state)
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
            })}
            editable={false}
          >姓名</InputItem>
          <InputItem
            {...getFieldProps('mobile',{
              initialValue: info.mobile,
            })}
            editable={false}
          >手机号码</InputItem>
          <InputItem
          	type="digit"
            {...getFieldProps('code',{
              initialValue: '',
            })}
            extra={<Button type="primary" size="small" inline="true" onClick={this.getCode}>获取验证码</Button>}
          >验证码</InputItem>

        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WingBlank><Link to="/interview"><span><Button type="primary" size="large">提交</Button></span></Link></WingBlank>
      </div>
      </div>
    );
  }
}

export default createForm()(Home)