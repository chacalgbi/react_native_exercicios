import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.v1} />
            <View style={style.v2} />

        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    v1:{
        backgroundColor: '#ff801a',
        flexGrow: 1
    },
    v2: {
        backgroundColor: '#8312ed',
        flexGrow: 1
    }
})