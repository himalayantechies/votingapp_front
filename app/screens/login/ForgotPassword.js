import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, TextInput} from 'react-native';
import logo from '../../assets/logo-horizontal.png';
import GrayBorderedBtn from '../../components/buttons/grayBorderedBtn';
import GradientBtn from '../../components/buttons/GradientBtn';
import {mainUrl} from '../../config/mainUrl';
import axios from 'axios';

function ForgotPasswordContainer(props) {

    const emailValidator = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    };

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) =>{
        setEmail(event)
        setError('');
    }


    const handleSubmit = () => {
        if(emailValidator()){
            axios.post(`${mainUrl}forgot/send/email`,{
                email,
            }).then((data)=>{
                // props.navigation.navigate('ForgotPasswordCode');
                console.log(data,'data')
            }).catch((error)=>{
                setError(error.response.data.message)
                console.log(error.response,'error');
            })
        } else {
            setError('Email is incorrect')
        }
    };

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
                <Text style={styles.subTitle}>Enter your e-mail address and we’ll send you a code to reset your
                    password</Text>
                <View style={{
                    width: '100%',
                }}>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        placeholder={'example@gmail.com'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                        onChangeText={(e) => handleChange(e)}
                    />
                </View>
                <Text style={styles.errorStyle}>{error}</Text>
                <View style={styles.buttons}>
                    <GrayBorderedBtn width='45%' name='cancel'/>
                    <GradientBtn width='45%' name='send' goTo={handleSubmit}/>
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
        paddingBottom: 12,
    },
    subTitle: {
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
        paddingHorizontal: 51,
        paddingBottom: 24,
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
        width: '100%',
    },
    errorStyle: {
        color: 'red',
        fontSize: 12,
        paddingBottom: 15,
    },
});

export const ForgotPassword = ForgotPasswordContainer;
