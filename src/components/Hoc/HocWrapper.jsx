import React from 'react'

// import classnames from 'classnames'
import PropTypes from 'prop-types';


export default (ComposedComponent) => class extends React.Component {
    // 构造
    constructor(props) {
      super(props);
    }
    static propTypes = {
      
    }
    componentDidMount() {
    }
    render() {
      if (true) {
        // 如果cookie中的某一个值为true 
        return <ComposedComponent  { ...this.props} />;
      } else {
        if(this.props.hasDisabled) {
          return <ComposedComponent  { ...this.props} />;
        }else {
          return null;
        }

      }
    }
};



