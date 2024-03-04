import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export default function AppNavigator(){

  
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}