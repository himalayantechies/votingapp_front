import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TextInput, Picker, TouchableOpacity} from 'react-native';
import logoSmall from '../../assets/logo-horizontal.png';
import checkIcon from '../../assets/icons/check-icon.png';
import GradientBtn from '../../components/buttons/GradientBtn';
import { mainUrl } from '../../config/mainUrl';

import axios from 'axios';

function SignUpContainer(props) {

    const [gender, setGender] = useState('Male');
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState('')

    let toggleSwitch = () => {
        setChecked(!checked);
    };

    const emailValidator = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(values.email);
    };

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event, name) => {
        setValues({
                ...values,
                [name]: event,
            },
        );
        setError('')
    };

    const validation = () => {
        if(values.email && values.password && values.confirmPassword && values.fullName){
            if(emailValidator()){
                if(values.password.length && values.confirmPassword.length >= 8){
                    if(values.password === values.confirmPassword){
                       if (checked){
                           handleSubmit()
                       } else {
                           setError('Please accept terms and conditions')
                       }
                    } else {
                        setError('Passwords don`t match')
                    }

                } else {
                    setError('Password cannot be less than 8 characters')
                }
            } else{
                setError('Email is incorrect')
            }

        } else {
            setError('All fields are required')
        }
    }

    const handleSubmit = () => {
        axios.post(`${mainUrl}auth/signup`,{
            email: values.email,
            full_name: values.fullName,
            gender: gender,
            password: values.password,
            confirm_password: values.confirmPassword
        }).then((data)=>{
            props.navigation.navigate('SignIn')
        }).catch((error)=>{
            console.log(error.response,'error');
        })
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{
                paddingBottom: 10,
                paddingHorizontal: 30,
                alignItems: 'center',
                paddingTop: 20,
            }}>
                <Image source={logoSmall} style={styles.logoSmall}/>
                <Text style={styles.title}>Sign Up</Text>
                <View style={{
                    width: '100%',
                }}>
                    <Text style={styles.inputLabel}>Full Name</Text>
                    <TextInput
                        placeholder={'Full Name'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                        onChangeText={(e) => handleChange(e, 'fullName')}
                    />
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        placeholder={'Email Address'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                        onChangeText={(e) => handleChange(e, 'email')}
                    />
                    <Text style={styles.inputLabel}>Gender</Text>
                    <View style={styles.whiteSelect}>
                        <Picker
                            selectedValue={gender}
                            style={{height: 50, width: '100%'}}
                            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                        >
                            <Picker.Item label="Male" value="male"/>
                            <Picker.Item label="Female" value="female"/>
                        </Picker>
                    </View>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder={'********'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                        onChangeText={(e) => handleChange(e, 'password')}
                    />
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder={'********'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                        onChangeText={(e) => handleChange(e, 'confirmPassword')}
                    />
                    <View style={styles.termsContainer}>
                        <TouchableOpacity style={styles.checkbox} onPress={() => toggleSwitch()}>
                            {
                                checked && <Image source={checkIcon} style={styles.checkedIcon}/>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginLeft: 10,
                        }}>
                            <Text style={styles.termsText}>Accept Terms & Condition</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.errorStyle}>{error}</Text>
                    <GradientBtn name='Sign Up' goTo={validation}/>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 16,
                    }}>
                        <Text style={{
                            paddingRight: 5,
                            fontSize: 12,
                            color: '#858792',
                        }}>Already have an account</Text>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('SignIn');
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#000000',
                                textDecorationLine: 'underline',
                                textDecorationStyle: 'solid',
                                textDecorationColor: 'white',
                            }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
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
    logoSmall: {
        width: 225,
        height: 53,
    },
    title: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'bold',
        paddingTop: 14,
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
    whiteSelect: {
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 18,
    },
    termsContainer: {
        fontSize: 12,
        color: 'black',
        lineHeight: 16,
        fontFamily: 'regular',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.2)',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedIcon: {
        width: 12,
        height: 8,
    },
    termsText: {
        fontSize: 12,
        color: '#000000',
        lineHeight: 16,
        fontFamily: 'semibold',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#000',
    },
    errorStyle: {
        color: 'red',
        fontSize: 12,
        paddingBottom: 15,
    },
});

export const SignUp = SignUpContainer;

