import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Likes } from '../screens/like';

const Stack = createStackNavigator();

function LikesNavigator(){
    return (
        <Stack.Navigator
            headerMode={'none'}
        >
            <Stack.Screen name="Likes" component={ Likes } />
        </Stack.Navigator>
    )
}

export default LikesNavigator;
