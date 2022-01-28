import React, { useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';
import estilo from '../estilo';
import produtos from './Produtos'

export default () =>{

    function produtRender({item}) {
        return <Text>{item.id} - {item.nome} - R${item.preco}</Text>   
    }

    return(
        <>
            <Text style={estilo.fontG}>Lista de Produtos V2</Text>
            <FlatList 
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtRender}
            />
        </>

    )
}