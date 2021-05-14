import * as React from 'react';
import {Image, Text, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeNavigator';
import CoinsNavigator from './coinNavigator';
import LikesNavigator from './likesNavigator';
import ProfileNavigator from './profileNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                unmountOnBlur: true,
                tabBarIcon: ({focused, color, size}) => {
                    let imageSource = null;
                    if (route.name === 'HomeNavigator') {
                        imageSource = require('../assets/tabIcons/home-icon.png');
                    }
                    if (route.name === 'LikesNavigator') {
                        imageSource = require('../assets/tabIcons/like-icon.png');
                    }
                    if (route.name === 'CoinNavigator') {
                        imageSource = require('../assets/tabIcons/coin-icon.png');
                    }
                    if (route.name === 'ProfileNavigator') {
                        imageSource = require('../assets/tabIcons/profile-icon.png');
                    }
                    return <Image
                        style={{
                            width: 32,
                            height: 32,
                            tintColor: color,
                        }}
                        source={imageSource}
                    />;
                },
                tabBarLabel: ({focused, color, size}) => {
                },
            })}
            tabBarOptions={{
                activeTintColor: '#D5117C',
                inactiveTintColor: '#a5a9ad',
                style: {
                    height: 57,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderWidth: 1,
                    borderColor: '#FFFFFF7F',
                },
                tabStyle: {
                    height: 57,
                },
            }}
        >

            <Tab.Screen name="HomeNavigator" component={HomeNavigator}/>
            <Tab.Screen name="LikesNavigator" component={LikesNavigator}/>
            <Tab.Screen name="CoinNavigator" component={CoinsNavigator}/>
            <Tab.Screen name="ProfileNavigator" component={ProfileNavigator}/>

        </Tab.Navigator>
    );
}



