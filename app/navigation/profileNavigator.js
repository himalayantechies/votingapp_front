import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from '../screens'

const Stack = createStackNavigator();

function ProfileNavigator(){
    return (
        <Stack.Navigator
            headerMode={'none'}
        >
            <Stack.Screen name="Profile" component={ Profile } />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;
