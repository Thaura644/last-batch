import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import  { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../screens/ProfileScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import DashboardScreen from "../screens/Dashboard";

const Stack = createStackNavigator();

export default function AppNavigator(){

  
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                
                <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
                <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen}/>
                <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen}/>
                <Stack.Screen  name="Dashboard" options={{headerShown: false}} component={DashboardScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}