import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import estilo from '../estilo';
import produtos from './Produtos'

export default () =>{

    return(
        <>
            <Text style={estilo.fontG}>
                Lista de Produtos
            </Text>
            {
                produtos.map((p)=>{
                    return <Text key={p.id}>{p.id} - {p.nome} custa R${p.preco}</Text>
                })
            }
        </>

    )
}