import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Image, StatusBar } from 'react-native';
import backgroundImage from '../../assets/homeBackground.png';
import heartIcon from '../../assets/icons/heart.png';
import fullHeartIcon from '../../assets/icons/full-heart.png';

function HomeContainer(props) {

    const [NepalModels, setNepalModels] = useState([
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model1.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model2.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model3.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model4.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model5.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model6.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model1.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model2.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model3.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model4.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model5.png'),
            liked: false,
            likes: '12k',
        },
        {
            name: 'Ann Williams',
            image: require('../../assets/topModels/model6.png'),
            liked: false,
            likes: '12k',
        },
    ]);

    const toggleLike = index => {
        let newNepalModels = [...NepalModels];
        newNepalModels[index].liked = !newNepalModels[index].liked;
        setNepalModels(newNepalModels);
    }

    console.log(NepalModels, 'nepal models');
    return (
        <View styles={styles.container}>
            <StatusBar backgroundColor="#F8F8FA" barStyle="dark-content"/>
            <ScrollView>
                <Text style={styles.title}>logotype</Text>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                    <Text style={styles.backgroundImageText}>Faces of Nepal</Text>
                </ImageBackground>
                <View style={styles.homeContent}>
                    <View style={styles.homeHeader}>
                        <Text style={styles.topText}>Top 12</Text>
                        <TouchableOpacity onPress={()=>{
                            props.navigation.navigate('AllModels');
                        }}>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modelsContainer}>
                        {
                            NepalModels.map((item, index) => {
                                return (
                                    <View key={index} style={styles.modelItem}>
                                        <TouchableOpacity style={{
                                            position: 'relative',
                                        }} onPress={()=>{
                                            props.navigation.navigate('ModelSingle')
                                        }}>
                                            <Image source={item.image} style={styles.modelImage}/>
                                            <Text style={styles.order}>{index + 1}</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.modelName}>{item.name}</Text>
                                        <View style={styles.likeContainer}>
                                            <TouchableOpacity onPress={() => {
                                                toggleLike(index);
                                            }}>
                                                <Image style={styles.heart}
                                                       source={item.liked ? fullHeartIcon : heartIcon}/>
                                            </TouchableOpacity>
                                            <Text style={styles.likes}>{item.likes}</Text>
                                        </View>
                                    </View>
                                );
                            })
                        }

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
    title: {
        fontSize: 18,
        color: '#000000',
        textAlign: 'center',
        fontFamily: 'bold',
        paddingVertical: 8,
        textTransform: 'capitalize',
        backgroundColor :'#F8F8FA'
    },
    backgroundImage: {
        alignItems: 'center',
        width: '100%',
        height: 240,
        justifyContent: 'flex-end',
    },
    backgroundImageText: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'semibold',
        textTransform: 'uppercase',
        lineHeight: 35,
        paddingBottom: 24,
    },
    homeContent: {
        paddingHorizontal: 22,
    },
    homeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    topText: {
        fontSize: 16,
        color: '#717274',
        fontFamily: 'regular',
        lineHeight: 19,
    },
    seeAllText: {
        fontSize: 16,
        color: '#D5117C',
        lineHeight: 19,
    },
    modelsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    modelItem: {
        width: '30%',
        marginBottom: 20,
    },
    modelImage: {
        width: 100,
        height: 100,
    },
    order: {
        fontSize: 12,
        fontFamily: 'bold',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#D5117C',
        color: 'white',
        width: 18,
        height: 18,
        textAlign: 'center',
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    modelName: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'semibold',
        lineHeight: 17,
        paddingTop: 4,
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heart: {
        width: 18,
        height: 18,
    },
    likes: {
        fontSize: 12,
        color: '#D5117C',
        lineHeight: 14,
        fontFamily: 'semibold',
        paddingLeft: 5,
    },
});

export const Home = HomeContainer;
