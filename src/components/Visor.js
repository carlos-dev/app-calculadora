import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component  {
    render() {
        return( 
            <View>
                <TextInput style={styles.visor}
                    placeholder='Resultado'
                    editable={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 20,
    }
})