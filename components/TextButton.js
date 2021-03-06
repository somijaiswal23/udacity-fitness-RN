import React from 'react';
import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import {purple} from '../utils/colors';

export default function TextButton ({name, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.reset}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    reset:{
        textAlign: 'center',
        color: purple
    }
})