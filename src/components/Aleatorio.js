import React from 'react';
import { Text } from 'react-native';
import estilo from "./estilo"

export default (props)=>{

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const num = getRandomInt(props.min, props.max);

    console.warn(props);
    return(
        <Text style={estilo.fontP}>
            Um número entre {props.max} e {props.min} é: {num}.
            
        </Text>
    )
}