import React from 'react';
import { StyleSheet, Text, Dimensions,TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        height : Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center', 
        borderWidth: 1,
        borderColor: '#888'
    },
    operacaoButton:{
        color: '#fff',
        backgroundColor:'#fa8324'
    },
    button_2X_Maior:{
        width: (Dimensions.get('window').width / 4) * 2
    },
    button_3X_Maior:{
        width: (Dimensions.get('window').width / 4) * 3
    }
})
export default props => {
    const estilo = [styles.button];
    if (props.double) estilo.push(styles.button_2X_Maior);
    if (props.tliplo) estilo.push(styles.button_3X_Maior);
    if (props.operation) estilo.push(styles.operacaoButton);

    return (
        <TouchableHighlight onPress={()=>props.onClick(props.label)}>
            <Text style={ estilo }>{props.label}</Text>
        </TouchableHighlight>
    )
}