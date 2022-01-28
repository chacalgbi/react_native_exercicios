import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import estilo from '../estilo';

export default (props) =>{

    return(
        <Text style={estilo.fontG}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}