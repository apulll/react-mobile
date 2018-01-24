import React from 'react';
import { List, InputItem, Button, WingBlank, WhiteSpace  } from 'antd-mobile';
import { Link } from 'react-router';
import { createForm } from 'rc-form';
import { isEmpty } from 'lodash';
import HNavBar from 'components/HNavBar';
import { getAccessToken } from 'utils';
import './home.less';
// import ENV from 'ENV';

class Home extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {  
      query:{
        companyName:'深圳市前海欢雀科技有限公司',
        name:'陈小普',
        mobile:'18794772730',
      }
    }
  }
  componentDidMount(){
    // console.log(ENV,'env')
    const query = this.props.location.query
    !isEmpty(query) && this.setState({query})
    getAccessToken()
  }
  
  render() {
    const { query } = this.state;
    const { getFieldProps } = this.props.form;

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
          <h3 className="hq-home-info">{query.companyName}</h3>
          <p className="hq-home-info">邀请您填写面试登记表</p>
          
        </div>
        <WhiteSpace />
        <WhiteSpace />
      	<List className="hq-home-list">
          
      	  <InputItem
            {...getFieldProps('name',{
              initialValue: query.name,
            })}
            editable={false}
          >姓名</InputItem>
          <InputItem
            {...getFieldProps('mobile',{
              initialValue: query.mobile,
            })}
            editable={false}
          >手机号码</InputItem>
          <InputItem
          	type="digit"
            {...getFieldProps('code',{
              initialValue: '',
            })}
            extra={<Button type="primary" size="small" inline="true">获取验证码</Button>}
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