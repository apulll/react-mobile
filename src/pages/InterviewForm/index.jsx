import React from 'react';
import { List, WhiteSpace, Button, WingBlank, Toast } from 'antd-mobile';
import { browserHistory } from 'react-router';
import HNavBar from 'components/HNavBar';
import InterviewContainer from './InterviewContainer';
import mockAxios from 'mocks';
import { isEmpty, assign } from 'lodash';
import fetch from 'utils/fetch';
import { getDomainCookie } from 'utils'
import { resDataFormat, formErrorsMsg, defaultParams } from 'pages/InterviewForm/util'

const Item = List.Item;
const Brief = Item.Brief;


const routeFormatParams = {
	basic:'/basic',
	education:'/educationexperience',
	work:'/work',
	family:'/family',
	emergency:'/emergency',
}
/**
 * 生成跳转路由地址
 * @param  {[type]} item   [description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const routerFormat = function(item, params) {
	const route = params[item.template_module_value]
	const template_id = item.pivot.interview_template_id
	const template_module_id = item.pivot.template_module_id
	const url = `${route}/${template_id}/${template_module_id}`
	return url
}

const TemplateInfoTpl = (props) => {

 const { templateInfo }  = props
  return (
  	!isEmpty(templateInfo) ? templateInfo.map(
  		(item, i) =>
		    	
		        <Item
		          key={item.id}
		          arrow="horizontal"
		          multipleLine
		          onClick={() => {browserHistory.push(routerFormat(item, routeFormatParams))}}
		        >
		          {item.template_module_name}
		          {isEmpty(item.extends) ? <Brief>还未添加{item.template_module_name}</Brief> :null}
		        </Item>
		  	
  	) : null
  )
}


export default class Interview extends React.Component {
  
  constructor(props) {
	super(props)
	this.state = {	
		templateInfo:{}
	}
  }
  componentDidMount(){
  	mockAxios.get('/api/template/info').then((res)=>{
      this.setState({templateInfo:res.data.res.template})
    })
  }
  getTemplateInfo = async ()=> {
  	const url = `http://hrmapi.local.com/Api/interview/fill/determine`
  	const params = {template_id:getDomainCookie('template_id')}
  	const requestParams = assign({}, defaultParams(), params)
  	try {
  		const newData = await fetch({url:url,data:requestParams})
	  	if(newData){
	  		//正式保存成功之后，后面表单的所有编辑按钮全部需要置灰或者路由跳转控制不能通过
	  	}
  	}catch(error){

  	}
  }
  submitHandle = async ()=> {
  	const url = `http://hrmapi.local.com/Api/interview/fill/determine`
  	const params = {template_id:getDomainCookie('template_id')}
  	const requestParams = assign({}, defaultParams(), params)
  	try {
  		const newData = await fetch({url:url,data:requestParams})
	  	if(newData){
	  		//正式保存成功之后，后面表单的所有编辑按钮全部需要置灰或者路由跳转控制不能通过
	  	}
  	}catch(error){

  	}
  	
  }
  render() {
  	const { templateInfo } = this.state;
    return (
      <div>
      	<HNavBar 
          title="面试登记表"
        />
        <InterviewContainer>
	      	<List>
		    	<TemplateInfoTpl templateInfo={templateInfo.modules}/>
		      	<WhiteSpace size="lg" />
		    	<WingBlank><Button type="primary" onClick={this.submitHandle}>保存</Button></WingBlank>
		    	<WhiteSpace size="lg" />
		      	<WhiteSpace size="lg" />
		    </List>
	    </InterviewContainer>
      </div>
    );
  }
}