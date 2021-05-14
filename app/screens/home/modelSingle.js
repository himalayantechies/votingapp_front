import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, StatusBar, ImageBackground, Dimensions} from 'react-native';
import backgroundImage from '../../assets/model-single-background.png';
import backArrow from '../../assets/icons/back-arrow.png';
import shareIcon from '../../assets/icons/share-icon.png';
import modelImage from '../../assets/SignleModel/model1.png';
import introductionIcon from '../../assets/icons/introduction-icon.png';
import hobbyIcon from '../../assets/icons/hobby-icon.png';
import experienceIcon from '../../assets/icons/experience.png';
import heartIcon from '../../assets/icons/heart.png';
import heartIconWhite from '../../assets/icons/white-heart.png';

const windowWidth = Dimensions.get('window').width;

function ModelSingleContainer(props) {

    const [modelImages, setModelImages] = useState([
        require('../../assets/singlModelImages/image1.png'),
        require('../../assets/singlModelImages/image2.png'),
        require('../../assets/singlModelImages/image3.png'),
        require('../../assets/singlModelImages/image4.png'),
        require('../../assets/singlModelImages/image5.png'),
        require('../../assets/singlModelImages/image6.png'),
        require('../../assets/singlModelImages/image7.png'),
        require('../../assets/singlModelImages/image8.png'),
        require('../../assets/singlModelImages/image9.png'),
        require('../../assets/singlModelImages/image10.png'),
        require('../../assets/singlModelImages/image11.png'),
        require('../../assets/singlModelImages/image12.png'),
        require('../../assets/singlModelImages/image13.png'),
        require('../../assets/singlModelImages/image14.png'),
        require('../../assets/singlModelImages/image15.png'),
        require('../../assets/singlModelImages/image9.png'),

    ]);

    console.log(modelImages, 'sadsa');

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle="dark-content"/>
            <ScrollView contentContainerStyle={{
                paddingBottom: 20,
            }}>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 12,
                        paddingRight: 22,
                        paddingTop: 40,
                    }}>
                        <TouchableOpacity style={{
                            padding: 10,
                        }} onPress={() => {
                            props.navigation.goBack();
                        }}>
                            <Image source={backArrow} style={styles.backArrow}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareContainer}>
                            <Image source={shareIcon} style={styles.shareIcon}/>
                            <Text style={styles.shareText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.modelInfoContainer}>
                    <View style={styles.modelInfo}>
                        <Text style={styles.modelName}>Heyeon Jung</Text>
                        <Text style={styles.modelCountry}>Katmandu, Nepal</Text>
                        <View style={styles.modelBodyMeasurement}>
                            <View style={{borderRightWidth: 1, borderColor: 'rgba(163,167,171,0.2)', paddingRight: 16}}>
                                <Text style={styles.modelBodyMeasurementInfo}>171</Text>
                                <Text style={styles.text}>Height</Text>
                            </View>
                            <View style={{
                                borderRightWidth: 1,
                                borderColor: 'rgba(163,167,171,0.2)',
                                paddingRight: 16,
                                paddingLeft: 16,
                            }}>
                                <Text style={styles.modelBodyMeasurementInfo}>52</Text>
                                <Text style={styles.text}>Weight</Text>
                            </View>
                            <View style={{paddingLeft: 16}}>
                                <Text style={styles.modelBodyMeasurementInfo}>1998</Text>
                                <Text style={styles.text}>Age</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        position: 'relative',
                        borderRadius: 18,
                        borderTopRightRadius: 0,
                    }}>
                        <Image source={modelImage} style={styles.modelImage}/>
                        <Text style={styles.order}>1</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 16,
                    paddingHorizontal: 22,
                }}>
                    <View style={styles.modelInformationContainer}>
                        <View style={styles.modelInformationHeader}>
                            <Image source={introductionIcon} style={styles.modelInformationIcon}/>
                            <Text style={styles.modelInformationHeaderText}>self-introduction</Text>
                        </View>
                        <Text style={styles.modelInformationText}>Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam
                            nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et
                            justo duo dolores et ea rebum.</Text>
                    </View>
                    <View style={styles.modelInformationContainer}>
                        <View style={styles.modelInformationHeader}>
                            <Image source={hobbyIcon} style={styles.modelInformationIcon}/>
                            <Text style={styles.modelInformationHeaderText}>Hobby/Strength</Text>
                        </View>
                        <Text style={styles.modelInformationText}>- Lorem ipsum dolor</Text>
                        <Text style={styles.modelInformationText}>- Consetetur sadipscing</Text>
                        <Text style={styles.modelInformationText}>- Sed diam nonumy</Text>
                    </View>
                    <View style={styles.modelInformationContainer}>
                        <View style={styles.modelInformationHeader}>
                            <Image source={experienceIcon} style={styles.modelInformationIcon}/>
                            <Text style={styles.modelInformationHeaderText}>experiences</Text>
                        </View>
                        <Text style={styles.modelInformationText}>Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</Text>
                    </View>
                </View>
                <View style={styles.votesContainer}>
                    <Text style={styles.voteHeader}>My Votes</Text>
                    <Image source={heartIcon} style={[styles.heartIcon, {marginHorizontal: 8}]}/>
                    <Text style={styles.voteQuantity}>1,225,109</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 16,
                }}>
                    <TouchableOpacity style={styles.voteMe}>
                        <Image source={heartIconWhite} style={styles.heartIcon}/>
                        <Text style={styles.voteText}>Vote For Me</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.photoTitle}>My Photos</Text>
                <View style={styles.photoContainer}>
                    {
                        modelImages.map((item, index) => {
                            return (
                                <Image key={index} source={item} style={styles.myPhotosItem}/>
                            );
                        })
                    }
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
    },
    backArrow: {
        width: 22,
        height: 22,
    },
    shareContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: 'rgba(213,17,124,0.2)',
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    shareIcon: {
        width: 22,
        height: 22,
    },
    shareText: {
        fontSize: 14,
        color: '#D5117C',
        fontFamily: 'bold',
        lineHeight: 17,
        paddingLeft: 6,
    },
    modelInfoContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        marginTop: -60,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderColor: 'rgba(216,216,216,0.5)',
    },
    modelName: {
        fontSize: 24,
        color: '#000000',
        fontFamily: 'bold',
    },
    modelCountry: {
        fontSize: 14,
        color: '#717274',
        fontFamily: 'semibold',
        lineHeight: 20,
    },
    modelBodyMeasurement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 12,
        color: '#A3A7AB',
        fontFamily: 'regular',
        lineHeight: 14,
    },
    modelBodyMeasurementInfo: {
        fontSize: 20,
        color: '#000000',
        fontFamily: 'semibold',
        lineHeight: 24,
        paddingBottom: 2,
    },
    modelImage: {
        width: 120,
        height: 120,
    },
    order: {
        fontSize: 18,
        fontFamily: 'bold',
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#D5117C',
        color: 'white',
        width: 30,
        height: 30,
        textAlign: 'center',
        borderBottomLeftRadius: 4,
    },
    modelInformationContainer: {
        marginBottom: 24,
    },
    modelInformationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
    },
    modelInformationIcon: {
        width: 19,
        height: 19,
    },
    modelInformationHeaderText: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'bold',
        lineHeight: 19,
        paddingLeft: 6,
    },
    modelInformationText: {
        fontSize: 14,
        color: '#717274',
        fontFamily: 'regular',
        lineHeight: 17,
    },
    votesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    voteHeader: {
        fontSize: 24,
        color: '#717274',
        fontFamily: 'semibold',
        lineHeight: 29,
    },
    heartIcon: {
        width: 29,
        height: 29,
    },
    voteQuantity: {
        fontSize: 24,
        color: '#D5117C',
        fontFamily: 'semibold',
    },
    voteMe: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D5117C',
        width: 203,
        borderRadius: 20,
        paddingHorizontal: 7,
        paddingVertical: 5,
    },
    voteText: {
        fontSize: 22,
        color: 'white',
        fontFamily: 'semibold',
        lineHeight: 27,
        paddingLeft: 8,
    },
    photoTitle: {
        fontSize: 18,
        color: '#000000',
        fontFamily: 'bold',
        lineHeight: 22,
        textAlign: 'center',
        paddingTop: 16,
        paddingBottom: 10,
    },
    photoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 22
    },
    myPhotosItem: {
        width: (windowWidth - 62) / 4,
        height: (windowWidth - 62) / 4,
        marginBottom: windowWidth - (4*(windowWidth - 44) / 4)
    },
});

export const ModelSingle = ModelSingleContainer;
