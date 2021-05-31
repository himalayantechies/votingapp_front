import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Video from 'react-native-video';

export default class FullScreenVideo extends Component {

    render() {
        return (
            <Modal
                onSwipeComplete={() => {
                    this.props.close();
                }}
                onBackButtonPress={() => {
                    this.props.close();
                }}
                backdropColor={'black'}
                backdropOpacity={1}
                testID={'modal'}
                animationInTiming={500}
                animationIn="slideInRight"
                animationOut="slideOutRight"
                style={{margin: 0}}
                isVisible={this.props.isVisible}>
                <View style={styles.container}>
                    <Video
                        source={this.props.url}
                        resizeMode="cover"
                        paused={this.props.paused}
                        fullscreen={true}

                        style={{overflow: 'hidden', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
                    />
                    <TouchableOpacity style={styles.close_btn} onPress={async () => {
                        await this.setState({
                            paused: true
                        })
                        await this.props.close()
                    }}>
                        <Image source={require('../assets/icons/closeBtn.png')} style={{width: 32, height: 32}}/>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    close_btn: {
        position: 'absolute',
        top: 20,
        right: 20,
    }
});
