import React from 'react';
import { Link, browserHistory } from 'react-router';
import { List, WhiteSpace, SwipeAction, WingBlank, Button } from 'antd-mobile';
import HNavBar from 'components/HNavBar';
import InterviewContainer from '../InterviewContainer';
import mockAxios from 'mocks';
import { isEmpty } from 'lodash';

const Item = List.Item;

const ListTpl = (props) => {
  const { item } = props;

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
	        onClick={() => {browserHistory.push('/educationexperience/edit')}}
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
    mockAxios.get('/api/education/list').then((res)=>{
    	console.log(res, 'list res')
      this.setState({list:res.data.res.education})
    })
  }
  render() {
    const {list} = this.state;
    return (
      <div>
      	<HNavBar 
          title="教育经历"
        />
        <InterviewContainer>
        	{!isEmpty(list) ? list.map((item, i) =><ListTpl key={i} item={item} />) : null}
        </InterviewContainer>

      	<WhiteSpace />
      	<WingBlank>
      		<Link to="/educationexperience/add"><Button type="primary">新增教育经历</Button></Link>
      	</WingBlank>

      </div>
    );
  }
}