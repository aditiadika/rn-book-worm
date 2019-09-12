import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class BookCount extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { title } = this.props;
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 15 }}>{title}</Text>
				<Text>0</Text>
			</View>
		);
	}
}
