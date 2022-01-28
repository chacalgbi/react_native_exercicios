import React, { useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import Axios from 'axios';
import estilo from './estilo';

export default () =>{

        const x = Axios.post('http://172.17.1.253:8081/login',{usuario: "lucas", senha: "1234"})
        console.log(x)
        
        
        /*
        .then((res)=>{
            var resposta = JSON.parse(JSON.stringify(res));
            console.warn(resposta.data.dados.resposta[0]);
            usuario = resposta.data.dados.resposta;
        })
*/

    return(
        <>
            <Text>Login</Text>
        </>
        
    )
}