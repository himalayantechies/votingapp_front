import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Profile, ChangeUserInfo, ChangeUserPassword } from '../screens'

const Stack = createStackNavigator();

function ProfileNavigator(){
    return (
        <Stack.Navigator
            headerMode={'none'}
        >
            <Stack.Screen name="Profile" component={ Profile } />
            <Stack.Screen name="ChangeUserInfo" component={ ChangeUserInfo } />
            <Stack.Screen name="ChangeUserPassword" component={ ChangeUserPassword } />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;
