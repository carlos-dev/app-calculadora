import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Cabecalho extends Component  {
    render() {
        return(
            <View style={styles.topo}>
                <Text style={styles.titulo}>Calculadora 1.0</Text>
            </View>     
        )
    }
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        backgroundColor: '#2196f3',
        padding: 20,
    },
    titulo: {
        fontSize: 25,
        color: '#fff'
    }
})