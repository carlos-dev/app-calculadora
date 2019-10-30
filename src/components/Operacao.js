import React, { Component } from 'react';
import { StyleSheet, Picker } from 'react-native';

export default class Operacao extends Component  {
    constructor(props){
        super(props);

        this.state = { operacao: '' }
    }

    render() {
        return(
            <Picker 
                style={styles.operacao}
                selectedValue={this.state.operacao}
            >
                <Picker.Item label='soma' value='soma' />
                <Picker.Item label='subtração' value='subtracao' />
            </Picker> 
        )
    }
}

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15,
    }
})