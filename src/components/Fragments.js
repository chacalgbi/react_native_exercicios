import React from 'react';
import { Text, View } from 'react-native';
import estilo from "./estilo"

export default (props)=>{

    console.warn(props);
    return(
        <>
            <Text style={estilo.fontG}>{props.principal}</Text>
            <Text style={estilo.fontP}>{props.secundario}</Text>
        </>
        
    )

}