import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Image, StatusBar, Picker} from 'react-native';
import backIcon from '../../assets/icons/back-arrow.png';
import GrayBorderedBtn from '../../components/buttons/grayBorderedBtn';
import GradientBtn from '../../components/buttons/GradientBtn';

function ChangeUserInfoContainer(props) {
    const [selectedValue, setSelectedValue] = useState('Male');

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle="dark-content"/>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Personal Information</Text>
                <TouchableOpacity style={styles.backIconContainer} onPress={() => {
                    props.navigation.goBack();
                }}>
                    <Image source={backIcon} style={styles.backIcon}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{
                    width: '100%',
                    paddingHorizontal: 30,
                    marginTop: 25
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
        paddingTop: 20,
    },
    header: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'white',
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
    backIcon: {
        width: 24,
        height: 24,
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
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },

});

export const ChangeUserInfo = ChangeUserInfoContainer;
