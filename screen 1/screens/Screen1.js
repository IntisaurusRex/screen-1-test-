import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 


export default class Screen5 extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    You are an amazing person and everyone loves and appreciates you! Don't let anything bring you down. 
                </Text>
                <Screen1 color={this.props.navigation.getParam('color')}/> 
            </View>
        )
         
    }
} 
