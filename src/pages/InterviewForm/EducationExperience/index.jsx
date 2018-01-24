import React from 'react';
import { Link, browserHistory } from 'react-router';
import { List, WhiteSpace, SwipeAction, WingBlank, Button } from 'antd-mobile';
import HNavBar from 'components/HNavBar';
import mockAxios from 'mocks';

const Item = List.Item;

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        fieldDatas: null,
    }
  }
  componentDidMount() {
    // mockAxios.get('/api/basicInfo').then((res)=>{
    //   this.setState({fieldDatas:res.data})
    // })
  }
  render() {
    // const {fieldDatas} = this.state;
    return (
      <div>
      	<HNavBar 
          title="教育经历"
        />
        <WhiteSpace />
      	<List style={{marginTop:45}}>
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
	          <p>重庆邮电大学</p> 
	          <p><span>本科</span><span>学士</span></p>
	          <p>2012-09-20至2016-09-20</p>
	        </Item>
	       </SwipeAction>
      	</List>
      	<WhiteSpace />
      	<List>
	        <Item  
		        align="middle" 
		        arrow="horizontal" 
		        multipleLine 
		        onClick={() => {browserHistory.push('/educationexperience/edit')}}
	        >
	          <p>重庆邮电大学</p> 
	          <p><span>本科</span><span>学士</span></p>
	          <p>2012-09-20至2016-09-20</p>
	        </Item>
      	</List>
      	<WhiteSpace />
      	<WhiteSpace />
      	<WingBlank>
      		<Button type="primary">新增教育经历</Button>
      	</WingBlank>

      </div>
    );
  }
}