import React from 'react';
import { Link, browserHistory } from 'react-router';
import { List, WhiteSpace, SwipeAction, WingBlank, Button } from 'antd-mobile';
import HNavBar from 'components/HNavBar';
import InterviewContainer from '../InterviewContainer';
import { defaultParams } from 'pages/InterviewForm/util'
import mockAxios from 'mocks';
import { isEmpty } from 'lodash';
import fetch from 'utils/fetch';

const Item = List.Item;

const ListTpl = (props) => {
  const { item, params } = props;
  const editUrl = `/educationexperience/edit/${params.template_id}/${params.template_module_id}/${item.id}`

  return (
  	<div>
    <List>
    	<SwipeAction
	      style={{ backgroundColor: 'gray' }}
	      autoClose
	      right={[
	        {
	          text: 'Cancel',
	          onPress: () => console.log('cancel'),
	          style: { backgroundColor: '#ddd', color: 'white' },
	        },
	        {
	          text: 'Delete',
	          onPress: () => console.log('delete'),
	          style: { backgroundColor: '#F4333C', color: 'white' },
	        },
	      ]}
	      
	      onOpen={() => console.log('global open')}
	      onClose={() => console.log('global close')}
	    >
        <Item  
	        align="middle" 
	        arrow="horizontal" 
	        multipleLine 
	        onClick={() => {browserHistory.push(editUrl)}}
        >
          <p>{item.school}</p> 
          <p><span>{item.major}</span>-<span>{item.culture_type_text}</span></p>
          <p>{item.start_at}至{item.end_at}</p>
        </Item>
       </SwipeAction>
  	</List>
  	<WhiteSpace />
  	</div>
  )
}

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        list: [],
    }
  }
  componentDidMount() {
    this.getEducationList()
  }
  mockGet = ()=> {
    mockAxios.get('/api/education/list').then((res)=>{
      console.log(res, 'list res')
      this.setState({list:res.data.res.education})
    })
  }
  getEducationList = async ()=> {
    
    const { params } = this.props
    const url = API.INTERVIEW_EDUCATION;
    const requestParams = defaultParams(params)
    try {
      const newData = await fetch({url:url,data:requestParams})
    
        this.setState({list:newData.res.education})

    }catch(error){
      // this.setState({loading:false,disabled:false})
    }
  }
  render() {
    const {list} = this.state;
    const { params } = this.props
    const addUrl = `/educationexperience/add/${params.template_id}/${params.template_module_id}`
    return (
      <div>
      	<HNavBar 
          title="教育经历"
        />
        <InterviewContainer>
        	{!isEmpty(list) ? list.map((item, i) =><ListTpl key={i} item={item} params={params}/>) : null}
        </InterviewContainer>

      	<WhiteSpace />
      	<WingBlank>
      		<Link to={addUrl}><Button type="primary">新增教育经历</Button></Link>
          {/*<Link to="/educationexperience/add"><Button type="primary">新增教育经历</Button></Link>*/}
      	</WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
      </div>
    );
  }
}