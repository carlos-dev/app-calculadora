import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

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
        height: 80,
        fontSize: 20,
        padding: 10,
    }
})