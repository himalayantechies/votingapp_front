import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import tabNavigation from "./tabNavigation";

import { Splash, SignUp, SignIn, ForgotPassword, ForgotPasswordCode, ResetPassword } from "../screens";

function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="tabNavigation" component={tabNavigation} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ForgotPasswordCode" component={ForgotPasswordCode} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    );
}

export default StackNavigation
