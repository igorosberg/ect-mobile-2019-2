import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import firebase from 'react-native-firebase';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Nome</Text>
                <TextInput
                    onChange={(text)=>this.setState({livro:text})}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })