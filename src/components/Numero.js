import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Numero extends Component  {
    render() {
        return(
            <TextInput style={styles.numero} />
        )
    }
}

const styles = StyleSheet.create({
    numero: {
        backgroundColor: '#eee',
        width: 140,
        height: 60,
        fontSize: 20,
        padding: 10,
    }
})