import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, TextInput} from 'react-native';
import logo from '../../assets/logo-horizontal.png';
import GrayBorderedBtn from '../../components/buttons/grayBorderedBtn';
import GradientBtn from '../../components/buttons/GradientBtn';

function ForgotPasswordContainer(props) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{
                paddingBottom: 10,
                paddingHorizontal: 30,
                alignItems: 'center',
                paddingTop: 130,
            }}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={styles.subTitle}>Enter your e-mail address and we’ll send you a code to reset your password</Text>
                <View style={{
                    width: '100%'
                }}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        placeholder={'example@gmail.com'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                    />
                </View>
                <View style={styles.buttons}>
                    <GrayBorderedBtn width='45%' name='cancel' />
                    <GradientBtn width='45%' name='send' goTo={()=>{
                        props.navigation.navigate('ForgotPasswordCode')
                    }} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FA',
    },
    logo: {
        width: 225,
        height: 53,
    },
    title: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'bold',
        paddingTop: 18,
        paddingBottom: 12
    },
    subTitle:{
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
        paddingHorizontal: 51,
        paddingBottom: 24
    },
    inputLabel: {
        fontSize: 12,
        color: '#000000',
        paddingBottom: 4,
        fontFamily: 'regular',
        lineHeight: 16,
    },
    whiteInput: {
        width: '100%',
        fontSize: 14,
        height: 44,
        color: 'black',
        borderRadius: 4,
        paddingLeft: 10,
        marginBottom: 18,
        backgroundColor: 'white',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    }
});

export const ForgotPassword = ForgotPasswordContainer;
