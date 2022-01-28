import React from 'react';
import { View, Button } from "react-native";
import estilo from "./estilo"

const Separator = () => ( <View style={estilo.separator} />);

export default (props) =>{

    function executar(num) {
        console.warn("executou", num);
    }

    return(
        <>
            <Button
                title="Executar 1"
                onPress={()=> executar(5)}
            />
            <Separator />
            <Button
                title="Executar 2"
                onPress={()=> executar(10)}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </>

    )
}