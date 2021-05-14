import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TextInput, Picker, TouchableOpacity} from 'react-native';
import logoSmall from '../../assets/logo-horizontal.png';
import checkIcon from '../../assets/icons/check-icon.png';
import GradientBtn from '../../components/buttons/GradientBtn';

function SignUpContainer(props) {
    const [selectedValue, setSelectedValue] = useState('Male');
    const [checked, setChecked] = useState(false);
    let toggleSwitch = () => {
        setChecked(!checked);
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
                    />
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        placeholder={'Email Address'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                    />
                    <Text style={styles.inputLabel}>Gender</Text>
                    <View style={styles.whiteSelect}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{height: 50, width: '100%'}}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
                    />
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder={'********'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
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
                    <GradientBtn name='Sign Up'goTo={()=>{
                        props.navigation.navigate('SignIn')
                    }} />
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
                        }}>Already have an account</Text>
                        <TouchableOpacity onPress={()=>{
                            props.navigation.navigate('SignIn')
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
});

export const SignUp = SignUpContainer;

