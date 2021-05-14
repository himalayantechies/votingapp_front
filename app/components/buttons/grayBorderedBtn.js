import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

export default function GrayBorderedBtn(props){
    return(
        <TouchableOpacity style={[styles.darkCyanBtn, {width: props.width}]} onPress = {props.goTo}>
            <Text style={styles.btnText}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    darkCyanBtn: {
        borderRadius: 4,
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8FA',
        borderWidth: 1,
        borderColor: '#A3A7AB'
    },
    btnText: {
        fontSize:  14,
        color: '#A3A7AB',
        fontFamily: 'semibold',
        lineHeight: 19,
        textTransform: 'uppercase'
    },

})
