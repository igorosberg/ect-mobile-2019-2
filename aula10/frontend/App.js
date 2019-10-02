import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList } from 'react-native';

const serverIp = '192.168.100.4'  //coloque o ip do seu pc aqui. o servidor backend deve estar rodando no seu pc para o app funcionar

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nome: '',
			preco: '',
			produtos: []
		}
		this.submit = this.submit.bind(this)
		this.renderItem = this.renderItem.bind(this)
	}
	
	async componentDidMount() {
		try {
			const requestInfo = {
				method: 'GET'
			}
			
			const response = await fetch(`http://${serverIp}:4001/produtos`, requestInfo);
			
			const produtos = await response.json();
		
			this.setState({produtos})
		} catch(e) {
			console.log(e)
		}
	}
	
	async submit() {
		const produto = {
			nome: this.state.nome,
			preco: this.state.preco
		}
		
		const requestInfo = {
			method: 'POST',
			body: JSON.stringify(produto),
			headers: new Headers({
				'Content-type': 'application/json'
			})
		}
		
		try{
			const response = await fetch(`http://${serverIp}:4001/produto`,requestInfo)
			
			const produto = await response.json();
			
			this.setState({
				produtos: this.state.produtos.concat([produto]), 
				nome: '',
				preco: ''
			})
		} catch(e) {
			console.log(e)
		}
	}
	
	renderItem(item, key) {
		return (
			<View style={styles.listItem}>
				<Text>Nome: {item.nome} - Preço: {item.preco}</Text>
			</View>
		)
	}
	
	
	render() {
		return (
			<View style = {styles.container}>
				<View>
					<TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Nome"
					   placeholderTextColor = "#9a73ef"
					   autoCapitalize = "none"
					   value = {this.state.nome}
					   onChangeText = {(nome) => this.setState({nome})}/>
					
					<TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Preço"
					   placeholderTextColor = "#9a73ef"
					   autoCapitalize = "none"
					   value = {this.state.preco}
					   onChangeText = {(preco) => this.setState({preco})}/>
					
					<TouchableOpacity
					   style = {styles.submitButton}
					   onPress = {() => this.submit()}>
					   <Text style = {styles.submitButtonText}> Cadastrar </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.list}>
					<FlatList
						
						data={this.state.produtos}
						renderItem={({ item }) => this.renderItem(item)}
						keyExtractor={item => item._id}
					/>
				</View>
			 </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 23
	},
	input: {
		margin: 15,
		height: 40,
		borderColor: '#7a42f4',
		borderWidth: 1
	},
	submitButton: {
		backgroundColor: '#7a42f4',
		padding: 10,
		margin: 15,
		height: 40,
	},
	submitButtonText:{
		color: 'white'
	},
	list: {
		flex: 1
	},
	listItem: {
		flexDirection: 'row',
		padding: 20,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	}
})

export default App