import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image, ImageBackground} from 'react-native';
import backgroundImage from '../../assets/model-single-background.png';
import pickImageIcon from '../../assets/icons/pick-image-icon.png';
import arrowRight from '../../assets/icons/arrow-right-gray.png';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import * as permission from '../../components/PhotoPickerPermissions';

function ProfileContainer(props) {
    const [filePath, setFilePath] = useState();

    const changeUserInfo = () => {
        props.navigation.navigate('ChangeUserInfo');
    };

    const changeUserPassword = () => {
        props.navigation.navigate('ChangeUserPassword');
    };

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await permission.requestCameraPermission();
        let isStoragePermitted = await permission.requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }
                console.log('base64 -> ', response.base64);
                console.log('uri -> ', response.uri);
                console.log('width -> ', response.width);
                console.log('height -> ', response.height);
                console.log('fileSize -> ', response.fileSize);
                console.log('type -> ', response.type);
                console.log('fileName -> ', response.fileName);
                setFilePath(response);
            });
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle="dark-content"/>
            <ScrollView>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                </ImageBackground>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {
                        filePath ?
                            <TouchableOpacity onPress={() => captureImage('photo')}>
                                <Image source={filePath} style={styles.pickedImage}/>
                            </TouchableOpacity> :
                            <TouchableOpacity style={styles.imageContainer} onPress={() => captureImage('photo')}>
                                <Image source={pickImageIcon} style={styles.pickImageIcon}/>
                            </TouchableOpacity>
                    }
                </View>
                <Text style={styles.username}>Samuel Williams</Text>
                <Text style={styles.userEmail}>Samuel@gmail.com</Text>
                <View style={[styles.changeUserInfoContainer, {borderBottomWidth: 1, marginTop: 35}]}>
                    <TouchableOpacity onPress={changeUserInfo}>
                        <Text style={styles.changeText}>Personal Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeUserInfo}>
                        <Image source={arrowRight} style={styles.arrowRight}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.changeUserInfoContainer, {paddingTop: 10}]}>
                    <TouchableOpacity onPress={changeUserPassword}>
                        <Text style={styles.changeText}>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeUserPassword}>
                        <Image source={arrowRight} style={styles.arrowRight}/>
                    </TouchableOpacity>
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
    backgroundImage: {
        width: '100%',
        height: 154,
        alignItems: 'center',
    },
    imageContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#D8D8D8',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60,
    },
    pickedImage: {
        width: 120,
        height: 120,
        borderRadius: 18,
        marginTop: -60,
    },
    pickImageIcon: {
        width: 48,
        height: 48,
    },
    username: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000000',
        lineHeight: 29,
        fontFamily: 'bold',
        paddingTop: 10,
        paddingBottom: 2,
    },
    userEmail: {
        textAlign: 'center',
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'semibold',
    },
    changeUserInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 22,
        paddingBottom: 13,
        borderColor: '#D8D8D8',
    },
    changeText: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'semibold',
        lineHeight: 18,
    },
    arrowRight: {
        width: 20,
        height: 20,
    },
});

export const Profile = ProfileContainer;
