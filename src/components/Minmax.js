import React from 'react';
import { Text } from 'react-native';
import estilo from "./estilo"

export default (props)=>{
    console.warn(props);
    return(
        <Text style={estilo.fontG}>
            O valor de {props.max} é maior que o valor de {props.min}.
            
        </Text>
    )
}