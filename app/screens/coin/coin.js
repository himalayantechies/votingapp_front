import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, StatusBar, Dimensions} from 'react-native';
import backIcon from '../../assets/icons/back-arrow.png';
import playBtn from '../../assets/icons/play-btn.png';
import Video from 'react-native-video';
import video from '../../assets/videos/model1.mp4';
import video1 from '../../assets/videos/model2.mp4';
import video2 from '../../assets/videos/model3.mp4';
import FullScreenVideo from '../../components/FullScreenVideo';


const windowWidth = Dimensions.get('window').width;

function CoinContainer() {

    const [advImages, setAdvImages] = useState([
        {
            image: require('../../assets/advImages/adv1.png'),
            video: video,
            name: 'name',
            coin: 15,
        },
        {
            image: require('../../assets/advImages/adv2.png'),
            video: video1,
            name: 'name',
            coin: 15,
        },
        {
            image: require('../../assets/advImages/adv3.png'),
            video: video2,
            name: 'name',
            coin: 15,
        },
        {
            image: require('../../assets/advImages/adv4.png'),
            video: video,
            name: 'name',
            coin: 15,
        },
        {
            image: require('../../assets/advImages/adv5.png'),
            video: video1,
            name: 'name',
            coin: 15,
        },
        {
            image: require('../../assets/advImages/adv6.png'),
            video: video2,
            name: 'name',
            coin: 15,
        },

    ]);

    const [currentVideo, setCurrentVideo] = useState();
    const [fullSceenVideoVisible, setFullSceenVideoVisible] = useState(false);

    const [play, setPlay] = useState(true);

    let fullSceen = (data) => {

        setFullSceenVideoVisible(true)
    };



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Advertisements</Text>
            </View>
            <ScrollView contentContainerStyle={{
                marginHorizontal: 22,
            }}>
                <Text style={styles.advTitle}>view adds to earn coins</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 15,
                }}>
                    <View style={{
                        paddingRight: 10,
                        borderRightWidth: 1,
                        borderColor: 'rgba(0,0,0,0.2)',
                    }}>
                        <Text style={styles.textBold}>500<Text style={styles.text}> coins</Text></Text>
                    </View>
                    <View style={{
                        paddingLeft: 10,
                    }}>
                        <Text style={styles.textBold}>1k<Text style={styles.text}> watched</Text></Text>
                    </View>
                </View>
                {
                    advImages.map((item, index) => {
                        return (
                            <View style={styles.advs}>
                                <View style={{
                                    position: 'relative',
                                }}>
                                    <Image source={item.image} style={styles.advImage}/>
                                    <TouchableOpacity style={styles.playBtnContainer} onPress={ () => {
                                        setCurrentVideo(item.video);
                                        fullSceen()
                                    }} >
                                        <Image source={playBtn} style={styles.playBtn}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingTop: 8,
                                    paddingBottom: 10,
                                }}>
                                    <Text style={styles.advText}>Advertisement name</Text>
                                    <Text style={styles.advCoinText}>15 coins</Text>
                                </View>
                            </View>
                        );
                    })
                }
            </ScrollView>

            {
                currentVideo ? <TouchableOpacity style={styles.videoContainer} onPress={()=>{
                    setCurrentVideo('');
                    fullSceen()//setPlay(true);
                }}>
                    <FullScreenVideo
                        close={() => {
                            setFullSceenVideoVisible(false)
                        }}
                        paused={!fullSceenVideoVisible}
                        url={currentVideo}
                        isVisible={fullSceenVideoVisible}
                    />

                </TouchableOpacity> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FA',
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
    advTitle: {
        fontSize: 24,
        color: '#000000',
        fontFamily: 'bold',
        lineHeight: 29,
        textTransform: 'capitalize',
        textAlign: 'center',
        paddingVertical: 10,
    },
    textBold: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'semibold',
    },
    text: {
        fontSize: 14,
        color: '#A3A7AB',
        fontFamily: 'semibold',
    },
    advs: {
        borderBottomWidth: 1,
        borderColor: '#D8D8D8',
        marginBottom: 20,
    },
    advImage: {
        height: 128,
        resizeMode: 'cover',
        borderRadius: 4,
    },
    advText: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'semibold',
        lineHeight: 17,
    },
    advCoinText: {
        fontSize: 14,
        color: '#D5117C',
        fontFamily: 'semibold',
        lineHeight: 17,
    },
    playBtnContainer: {
        position: 'absolute',
        left: (windowWidth - 59 - 30) / 2,
        top: 36,
    },
    playBtn: {
        width: 56,
        height: 56,
    },
    videoContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    backgroundVideo: {
        width: '100%',
        height: '100%'
    },
});

export const Coin = CoinContainer;
