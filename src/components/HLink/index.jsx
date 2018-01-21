import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class HLink extends React.Component {
	static propTypes = {
		type: PropTypes.String,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { ...resetProps} = this.props
		return (
			<Link></Link>
		);
	}
}
