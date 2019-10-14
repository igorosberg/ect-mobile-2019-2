import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import firebase from 'react-native-firebase';

const extractKey = ({ id }) => id

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            livros: []
        }
    }

    componentDidMount() {
        firebase.firestore().collection("livros").get()
            .then((querySnapshot) => {
                let livros = []
                querySnapshot.forEach((doc) => {
                    livros.push(doc.data())
                });
                this.setState({livros: livros})
            })
    }

    renderItem = ({ item }) => {
        return (
            <Text style={styles.row}>
                {item.nome}
            </Text>
        )
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.livros}
                renderItem={this.renderItem}
                keyExtractor={extractKey}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
    },
  })