import { Appbar } from "react-native-paper";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function MainAppbar(props){
    return(
        <Appbar.Header style={{backgroundColor: props.backgroundColor}}>
            <Appbar.BackAction onPress={() => {}}/>
            <Appbar.Content title={props.title}/>
            <Appbar.Action icon={props.icon} onPress={props.getUserPosition}/>
        </Appbar.Header>
    )
}