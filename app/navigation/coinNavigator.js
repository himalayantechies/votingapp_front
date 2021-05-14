import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Coin } from '../screens'

const Stack = createStackNavigator();

function CoinsNavigator(){
    return (
        <Stack.Navigator
            headerMode={'none'}
        >
            <Stack.Screen name="Coin" component={ Coin } />
        </Stack.Navigator>
    )
}

export default CoinsNavigator;
