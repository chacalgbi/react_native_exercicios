import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import estilo from '../estilo';

import ContadorDisplay from './contadorDisplay';
import ContadorBotoes from './contadorBotoes';

export default (props) =>{

    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return(
        <>
            <Text style={estilo.fontG}>ContadorV2</Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}