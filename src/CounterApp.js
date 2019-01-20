import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={this.props.increaseCounter}>
					<Text style={styles.text}>Increment</Text>
				</TouchableOpacity>

				<Text style={styles.vlaue}>{this.props.counter}</Text>

				<TouchableOpacity onPress={this.props.decreaseCounter} style={styles.button}>
					<Text style={styles.text}>Decrement</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
		decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		backgroundColor: '#ccc'
	},
	button: {
		backgroundColor: 'purple',
		padding: 4,
		borderRadius: 10
	},
	text: {
		fontSize: 25,
		color: '#fff'
	},
	vlaue: {
		fontSize: 25,
		color: 'royalblue'
	}
});
