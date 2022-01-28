import React, { useState } from 'react';
import { View, Button, Text } from "react-native";
import estilo from "./estilo"

const Separator = () => ( <View style={estilo.separator} />);

export default ({inicial = 0, passo = 1}) =>{

    const [numero, setNumero] = useState(inicial);

    return(
        <>
            <Text style={estilo.fontG}>{numero}</Text>
            <Separator />
            <Button title="+ mais"  onPress={()=>{setNumero(numero + passo)}}/>
            <Separator />
            <Button title="- menos" onPress={()=>{setNumero(numero - passo)}}/>
        </>
    )
}