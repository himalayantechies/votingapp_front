import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logoSquare from '../assets/logo-square.png';


function SplashContainer(props) {

    useEffect(() => {
        setTimeout(()=>{
            props.navigation.navigate('SignUp')
        },2000)
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Page</Text>
            <Image source={logoSquare} alt='logo'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 41,
        color: '#A3A7AB',
        fontFamily: 'semibold',
        paddingBottom: 50
    }
});

export const Splash = SplashContainer;
