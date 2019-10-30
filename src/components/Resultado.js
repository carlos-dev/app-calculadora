import React from 'react';
import { View, StyleSheet } from 'react-native';

import Visor from './Visor'

export default props => ( 
    <View style={styles.result}>
        <Visor />
    </View>   
)

const styles = StyleSheet.create({
    result: {
        marginHorizontal: 15,
    }
})