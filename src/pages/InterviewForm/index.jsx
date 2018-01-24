import React from 'react';
import { List, WhiteSpace, NavBar, Icon, Button, WingBlank } from 'antd-mobile';
import { browserHistory } from 'react-router';
import HNavBar from 'components/HNavBar';
import mockAxios from 'mocks';
import fetch from 'utils/fetch';
import { isEmpty } from 'lodash';

const Item = List.Item;
const Brief = Item.Brief;


const routeFormatParams = {
	basic:'/basic/detail',
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
  render() {
  	const { templateInfo } = this.state;
    return (
      <div>
      	<HNavBar 
          title="面试登记表"
        />
        <WhiteSpace />
      	<List style={{marginTop:45}}>
	    	<TemplateInfoTpl templateInfo={templateInfo.modules}/>
	      	<WhiteSpace size="lg" />
	    	<WingBlank><Button type="primary">保存</Button></WingBlank>
	    	<WhiteSpace size="lg" />
	      	<WhiteSpace size="lg" />
	    </List>
      </div>
    );
  }
}