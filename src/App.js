import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
import estilo from "./components/estilo"
//import Comp, { Comp1, Comp2 } from "./components/Multi_exports";
//import Minmax from "./components/Minmax";
//import Aleatorio from "./components/Aleatorio";
//import Fragments from "./components/Fragments";
//import Botao from "./components/Botao";
//import Contador from "./components/Contador";
//import Indireta from "./components/indireta";
//import ContadorV2 from './components/contador/contadorV2'
//import Diferenciar from './components/androidOuIos'
//import Pai from './components/relacao/Pai'
//import Filho from './components/relacao/Filho'
//import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import TesteAxios from './components/TesteAxios'

export default function App() {

    const [num, setNum] = useState(0)

    function exibir(num) {
        const n = "Número: " + num;
        setNum(n);
    }

    return(
        <SafeAreaView style={estilo.App}>
            <TesteAxios />

            



            {/*
            <ListaProdutos />
            <Pai>
                <Filho nome="Julia" sobrenome="Oliveira"/>
                <Filho nome="Gustavo" sobrenome="Oliveira"/>
            </Pai>
            <Pai>
                <Filho nome="Teste 1" sobrenome="Araújo"/>
                <Filho nome="Teste 2" sobrenome="Araújo"/>
            </Pai>
            <Diferenciar />
            <ContadorV2 />
            <Text style={estilo.fontG}>{num}</Text>
            <Indireta min={10} max={33} funcao={exibir} />
            <Contador inicial={100} passo={8}/>
            <Contador />
            <Botao />
            <Fragments principal="Cadastro" secundario="Tela de Cadastro"  />
            <Aleatorio min={3} max={100} />
            <Aleatorio min={0} max={9} />
            <Aleatorio min={20} max={30} />
            <Minmax min={3} max="30" />
            <Minmax min={1} max="94" />
            <Comp />
            <Comp1 />
            <Comp2 />
            */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

})