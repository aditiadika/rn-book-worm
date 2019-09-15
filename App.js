import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import BookCount from './components/BookCount';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			totalCount: 0,
			readingCount: 0,
			readCount: 0,
			isAddNewBookVisible: false,
			textInput: '',
			books: []
		};
	}

	showAddNewBook = () => {
		this.setState({ isAddNewBookVisible: true });
	};

	hideAddNewBook = () => {
		this.setState({ isAddNewBookVisible: false });
	};

	addBook = (book) => {
		this.setState((state, props) => ({
			books: [ ...state.books, book ],
			totalCount: state.totalCount + 1,
			readingCount: state.readingCount + 1
		}));
	};

	renderItem = (item, index) => (
		<View style={{ height: 50, flexDirection: 'row' }}>
			<View style={{ flex: 1, justifyContent: 'center', paddingLeft: 5 }}>
				<Text>{item}</Text>
			</View>
			<TouchableOpacity onPress={() => this.addBook(textInput)}>
				<View
					style={{
						width: 100,
						height: 50,
						backgroundColor: '#a5deba',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>Marks as Read</Text>
				</View>
			</TouchableOpacity>
		</View>
	);

	render() {
		const { totalCount, readCount, readingCount, isAddNewBookVisible, textInput, books } = this.state;

		return (
			<View style={{ flex: 1 }}>
				<SafeAreaView />
				<View
					style={{
						height: 70,
						borderBottomWidth: 0.5,
						borderBottomColor: '#E9E9E9',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Text>Welcome</Text>
				</View>

				<View style={{ flex: 1 }}>
					{isAddNewBookVisible && (
						<View style={{ height: 50, flexDirection: 'row' }}>
							<TextInput
								style={{ flex: 1, backgroundColor: '#ececec', paddingLeft: 5 }}
								placeholder="Enter Book Name"
								placeholderTextColor="grey"
								onChangeText={(text) => this.setState({ textInput: text })}
							/>
							<TouchableOpacity onPress={() => this.addBook(textInput)}>
								<View
									style={{
										width: 50,
										height: 50,
										backgroundColor: '#a5deba',
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<Ionicons name="ios-checkmark" color="white" size={40} />
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.hideAddNewBook}>
								<View
									style={{
										width: 50,
										height: 50,
										backgroundColor: '#deada5',
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<Ionicons name="ios-close" color="white" size={40} />
								</View>
							</TouchableOpacity>
						</View>
					)}

					<FlatList
						data={books}
						renderItem={({ item }, index) => this.renderItem(item, index)}
						keyExtractor={(item, index) => index.toString()}
						ListEmptyComponent={
							<View style={{ marginTop: 20, alignItems: 'center' }}>
								<Text style={{ fontWeight: 'bold' }}>Not Reading Any Books.</Text>
							</View>
						}
					/>

					<TouchableOpacity
						style={{ position: 'absolute', right: 20, bottom: 20 }}
						onPress={this.showAddNewBook}
					>
						<View
							style={{
								width: 50,
								height: 50,
								borderRadius: 25,
								backgroundColor: '#AAD1E6',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Text style={{ color: 'white', fontSize: 20 }}>+</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View
					style={{
						height: 70,
						borderTopWidth: 0.5,
						borderTopColor: '#E9E9E9',
						flexDirection: 'row'
					}}
				>
					<BookCount title="Total" count={totalCount} />
					<BookCount title="Reading" count={readingCount} />
					<BookCount title="Read" count={readCount} />
				</View>
				<SafeAreaView />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
