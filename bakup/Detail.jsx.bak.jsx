import React from 'react';
import { Link } from 'react-router';
import { List, NavBar, Icon } from 'antd-mobile';
import HIcon from 'components/HIcon';
import HNavBar from 'components/HNavBar';
import { isEmpty } from 'lodash';
import mockAxios from 'mocks';
import basicDetailData from 'mocks/data/basicInfoRes/detail'
import basicOriginData from 'mocks/data/basicInfo'
import { resDataFormat } from 'pages/InterviewForm/util'

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
    const newData = resDataFormat(basicOriginData, basicDetailData.res.basic, basicDetailData.res.extends)
    this.setState({fieldDatas:newData})

  }
  render() {
    const {fieldDatas} = this.state;
    return (
      <div>
      	<HNavBar 
          title="基本信息"
          rightContent={
            [
              <Link to="/basic/edit"><HIcon type="edit" /></Link>
            ]
          }
        />
      	<List style={{marginTop:45}}>
        	{!isEmpty(fieldDatas) ? fieldDatas.map((item, i) =><Item key={i} extra={item.column_values} >{item.column_name}</Item>) : null}
      	</List>
      </div>
    );
  }
}