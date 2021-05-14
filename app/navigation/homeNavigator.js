import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Home, AllModels, ModelSingle } from '../screens'

const Stack = createStackNavigator();

function HomeNavigator(){
    return (
        <Stack.Navigator
            headerMode={'none'}
        >
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen name="ModelSingle" component={ ModelSingle } />
            <Stack.Screen name="AllModels" component={ AllModels } />
        </Stack.Navigator>
    )
}

export default HomeNavigator;
