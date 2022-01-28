import React, { useState } from 'react';
import { Text, Platform } from 'react-native';
import estilo from './estilo';

export default () =>{

    function dispositivo() {
        if(Platform.OS === 'android'){
            return 'Android'
        }else if(Platform.OS === 'ios'){
            return 'IOS'
        }else{
            return 'Oxe!!!'
        }
    }

    return(
        <Text style={estilo.fontG}>{dispositivo()}</Text>
    )
}