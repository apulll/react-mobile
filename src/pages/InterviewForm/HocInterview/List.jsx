import React from 'react';
import { Link, browserHistory } from 'react-router';
import { List, WhiteSpace, SwipeAction, WingBlank, Button } from 'antd-mobile';
import HNavBar from 'components/HNavBar';
import InterviewContainer from '../InterviewContainer';
import { defaultParams } from 'pages/InterviewForm/util'
import mockAxios from 'mocks';
import { isEmpty } from 'lodash';
import fetch from 'utils/fetch';
import PropTypes from 'prop-types';

const Item = List.Item;

// const ListItemDefault = (props) => {
//   const { item } = props;
//   return (
//     <div>
//       <p>{item.school}</p> 
//       <p><span>{item.major}</span>-<span>{item.culture_type_text}</span></p>
//       <p>{item.start_at}至{item.end_at}</p>
//     </div>
//   )
// }

const ListItemDefault = ({item}) => (
  <div>
    <p>{item.school}</p> 
    <p><span>{item.major}</span>-<span>{item.culture_type_text}</span></p>
    <p>{item.start_at}至{item.end_at}</p>
  </div>
);



const ListTpl = (props) => {
  const { item, params, routeUrl, ListItem } = props;
  const editUrl = `${routeUrl}/edit/${params.template_id}/${params.template_module_id}/${item.id}`

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
          {ListItem({item})}
        </Item>
       </SwipeAction>
    </List>
    <WhiteSpace />
    </div>
  )
}

export default class InterviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        list: [],
    }
  }
  componentDidMount() {
    this.getList()
  }
  mockGet = ()=> {
    mockAxios.get('/api/education/list').then((res)=>{
      console.log(res, 'list res')
      this.setState({list:res.data.res.education})
    })
  }
  getList = async ()=> {
    
    const { params, apiUrl, nameSpace } = this.props
    const url = API[apiUrl];
    const requestParams = defaultParams(params)
    try {
      const newData = await fetch({url:url,data:requestParams})
    
        this.setState({list:newData.res[nameSpace]})

    }catch(error){
      // this.setState({loading:false,disabled:false})
    }
  }
  render() {
    const {list} = this.state;
    const { params, name, routeUrl, ListItem } = this.props
    console.log(ListItem,'ListItem')
    const addUrl = `${routeUrl}/add/${params.template_id}/${params.template_module_id}`
    return (
      <div>
        <HNavBar 
          title={name}
        />
        <InterviewContainer>
          {!isEmpty(list) ? list.map((item, i) =><ListTpl key={i} item={item} params={params} routeUrl={routeUrl} ListItem={ListItem}/>) : null}
        </InterviewContainer>

        <WhiteSpace />
        <WingBlank>
          <Link to={addUrl}><Button type="primary">新增{name}</Button></Link>
          {/*<Link to="/educationexperience/add"><Button type="primary">新增教育经历</Button></Link>*/}
        </WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
      </div>
    );
  }
}

InterviewList.propTypes = {
  name : PropTypes.string,
  routeUrl : PropTypes.string,
  params : PropTypes.object,
  apiUrl : PropTypes.string,
  ListItem: PropTypes.any
}

InterviewList.defaultProps = {  
  name:'教育经历',
  nameSpace:'education',
  routeUrl:'/educationexperience',
  params:{'template_id':5, template_module_id:2},
  apiUrl:'INTERVIEW_EDUCATION',
  ListItem: ListItemDefault
}