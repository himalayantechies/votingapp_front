import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import logoSmall from '../../assets/logo-horizontal.png';
import GradientBtn from '../../components/buttons/GradientBtn';
import facebookIcon from '../../assets/icons/facebook-icon.png';
import googleIcon from'../../assets/icons/google-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';

function SignInContainer (props){
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{
                paddingBottom: 10,
                paddingHorizontal: 30,
                alignItems: 'center',
                paddingTop: 130,
            }}>
                <Image source={logoSmall} style={styles.logoSmall}/>
                <Text style={styles.title}>Sign In</Text>
                <View style={{
                    width: '100%'
                }}>
                    <Text style={styles.inputLabel}>Email, Phone</Text>
                    <TextInput
                        placeholder={'Email, Phone'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                    />
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder={'********'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                    />
                    <View style={{
                        alignItems: 'flex-end',
                        marginBottom: 16
                    }}>
                        <TouchableOpacity onPress={()=>{
                            props.navigation.navigate('ForgotPassword')
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#000000',
                                textDecorationLine: 'underline',
                                textDecorationStyle: 'solid',
                                textDecorationColor: '#000',
                            }}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <GradientBtn name='Sign in' goTo={()=>{
                        props.navigation.navigate('tabNavigation')
                    }} />
                    <Text style={{
                        fontSize: 12,
                        color: '#858792',
                        textAlign: 'center',
                        paddingVertical: 16
                    }}>or connect</Text>
                    <View style={styles.socialLinks}>
                        <TouchableOpacity>
                            <Image source={facebookIcon} style={[styles.icon,{
                                marginRight: 32
                            }]} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={googleIcon} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={linkedinIcon} style={[styles.icon,{
                                marginLeft: 32
                            }]} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 16,
                    }}>
                        <Text style={{
                            paddingRight: 5,
                            fontSize: 12,
                            color: '#858792'
                        }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={()=>{
                            props.navigation.navigate('SignUp')
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#000000',
                                textDecorationLine: 'underline',
                                textDecorationStyle: 'solid',
                                textDecorationColor: 'white',
                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
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
    socialLinks: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
        width: 40,
        height: 40
    },
})

export const SignIn = SignInContainer
