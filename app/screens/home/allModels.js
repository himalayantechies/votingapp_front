import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView, TextInput} from 'react-native';
import backIcon from '../../assets/icons/backIcon.png';
import searchIcon from '../../assets/icons/search.png';
import heart from '../../assets/icons/heart.png';
import fullHeart from '../../assets/icons/full-heart.png';


function AllModelsContainer (props) {

    const [allModels, setAllModels] = useState([
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: true,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: false,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: false,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: true,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: true,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: false,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: false,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: true,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: false,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: true,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: false,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
        {
            name: 'Hoyeon Jung',
            image: require('../../assets/topModels/model1.png'),
            likes: '1225109',
            liked: false,
            ranking: '1',
            height: '171',
            weight: '52',
            age: '1998'
        },
    ])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#F8F8FA" barStyle="dark-content"/>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Logotype</Text>
                    <TouchableOpacity style={styles.backIconContainer} onPress={()=>{
                        props.navigation.goBack()
                    }}>
                        <Image source={backIcon} style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.filterContainer}>
                    <Text style={styles.filterAgeText}>Age</Text>
                    <View style={styles.searchSection}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity style={styles.searchIconContainer}>
                            <Image source={searchIcon} style={styles.searchIcon} name="ios-search" color="#000"/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.allModelsContainer}>
                    {
                        allModels.map((item, index) =>{
                            return (
                                <View style={styles.allModelsItem}>
                                    <TouchableOpacity style={{
                                        position: 'relative',
                                    }} onPress={()=>{
                                        props.navigation.navigate('ModelSingle')
                                    }}>
                                        <Image source={item.image} style={styles.modelImage}/>
                                        <Text style={styles.order}>{index + 1}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.modelInfo}>
                                        <Text style={styles.modelRanking}>{`No. ${item.ranking}`}</Text>
                                        <Text style={styles.modelName}>{item.name}</Text>
                                        <View style={styles.modelBodyMeasurement}>
                                            <Text style={[styles.text,{paddingRight:8,borderRightWidth:1,borderColor: '#D8D8D8'}]}><Text style={styles.modelBodyMeasurementInfo}>{item.height}</Text>cm</Text>
                                            <Text style={[styles.text,{paddingRight:8,borderRightWidth:1,borderColor: '#D8D8D8',paddingLeft: 8}]}><Text style={styles.modelBodyMeasurementInfo}>{item.weight}</Text>kg</Text>
                                            <Text style={[styles.text,{paddingLeft: 8}]}><Text style={styles.modelBodyMeasurementInfo}>{item.age}</Text>age</Text>
                                        </View>
                                        <Text style={styles.modelAbout} numberOfLines={1}>Lorem ipsum dolor sit amet ampo...</Text>
                                        <View style={styles.modelLikes}>
                                            <Image source={item.liked ? fullHeart : heart} style={styles.hearthIcon} />
                                            <Text style={styles.modelLikesQuantity}>{item.likes}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FA'
    },
    header:{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    headerTitle: {
        fontSize: 18,
        color: '#000000',
        fontFamily: 'bold'
    },
    backIconContainer: {
        position: 'absolute',
        left: 22,
    },
    backIcon :{
        width: 24,
        height: 24
    },
    filterAgeText: {
        fontSize: 14,
        color: '#343434',
        fontFamily: 'semibold',
        paddingRight: 15
    },
    filterContainer: {
        height: 41,
        backgroundColor: '#F1F1F1',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 22
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        position: 'relative'
    },
    searchIconContainer: {
        position: 'absolute',
        right: 14,
    },
    searchIcon: {
        width: 17,
        height: 17,
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'semibold',
        backgroundColor: '#F1F1F1',
        color: '#343434',
        borderRadius: 13,
        borderWidth: 1,
        borderColor: 'rgba(52,52,52,.3)',
        height: 25,
        paddingLeft: 15,
        paddingRight: 32,
        paddingTop: 0,
        paddingBottom: 3
    },

    allModelsContainer: {
        paddingHorizontal: 22
    },
    allModelsItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#D8D8D8'
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
    modelInfo: {
        paddingLeft: 16
    },
    modelRanking: {
        fontSize: 12,
        color: '#A3A7AB',
        fontFamily: 'semibold',
        lineHeight: 14,
        paddingBottom: 3
    },
    modelName: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'semibold',
        lineHeight: 17,
        paddingBottom: 6
    },
    modelBodyMeasurement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 3
    },
    text: {
        fontSize: 14,
        color: '#A3A7AB',
        fontFamily: 'semibold',
        lineHeight: 14,
    },
    modelBodyMeasurementInfo: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'semibold',
        lineHeight: 17
    },
    modelAbout: {
        fontSize: 12,
        color: '#000000',
        fontFamily: 'regular',
        lineHeight: 14,
        paddingBottom: 8
    },
    modelLikes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hearthIcon: {
        width: 18,
        height: 18
    },
    modelLikesQuantity: {
        fontSize: 12,
        color: '#D5117C',
        fontFamily: 'semibold',
        lineHeight: 14,
        paddingLeft: 4
    }
})

export const AllModels = AllModelsContainer
