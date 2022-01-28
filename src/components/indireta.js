import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import estilo from './estilo';

export default (props) =>{

    function gerar(min, max) {
        return min + max
    }

    return(
        <Button title="Executar" 
            onPress={()=>{
                const n = gerar(props.min, props.max)
                props.funcao(n)
            }}
        />
    )
}