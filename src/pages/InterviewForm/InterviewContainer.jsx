import React from 'react';
import { WhiteSpace } from 'antd-mobile';

const InterviewContainer = (props) => {
  return (
    <div style={{marginTop:45}} className={props.className}>
    	<WhiteSpace />
    	{props.children}
    </div>
  )
}

export default InterviewContainer;