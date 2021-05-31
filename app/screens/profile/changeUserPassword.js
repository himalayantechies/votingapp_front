import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Image, StatusBar} from 'react-native';
import backIcon from '../../assets/icons/back-arrow.png';
import GrayBorderedBtn from '../../components/buttons/grayBorderedBtn';
import GradientBtn from '../../components/buttons/GradientBtn';

function ChangeUserPasswordContainer(props) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle="dark-content"/>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Change Password</Text>
                <TouchableOpacity style={styles.backIconContainer} onPress={()=>{
                    props.navigation.goBack()
                }}>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{
                    width: '100%',
                    paddingHorizontal: 30,
                    paddingTop: 25
                }}>
                    <Text style={styles.inputLabel}>Old Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder={'********'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                    />
                    <Text style={styles.inputLabel}>New Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder={'********'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                    />
                    <Text style={styles.inputLabel}>Confirm New Password</Text>
                    <TextInput
                        secureTextEntry
                        placeholder={'********'}
                        style={styles.whiteInput}
                        placeholderTextColor="rgba(0,0,0,.4)"
                    />
                    <View style={styles.buttons}>
                        <GrayBorderedBtn width='45%' name='cancel' goTo={()=>{
                            props.navigation.navigate('Profile')
                        }} />
                        <GradientBtn width='45%' name='save' goTo={()=>{
                            props.navigation.navigate('Profile')
                        }} />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    header:{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'white'
    },
    headerTitle: {
        fontSize: 18,
        color: '#000000',
        fontFamily: 'bold',
    },
    backIconContainer: {
        position: 'absolute',
        left: 22,
    },
    backIcon :{
        width: 24,
        height: 24
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

export const ChangeUserPassword = ChangeUserPasswordContainer;
