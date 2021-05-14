import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function GradientBtn(props){
    return(
            <TouchableOpacity style={[styles.gradientBtn,{width: props.width}]} onPress = {props.goTo}>
                <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={[ '#D5117C' , '#7E40C5']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        {props.name}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gradientBtn: {
        borderRadius: 4,
        height: 41,
    },
    linearGradient: {
        flex: 1,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize:  16,
        color: 'white',
        fontFamily: 'semibold',
        lineHeight: 19,
        textTransform: 'uppercase'
    },

})
