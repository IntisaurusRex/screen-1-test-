import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 





export default class HomeScreen extends Component {

    goToScreen1=(color)=> {
      this.props.navigation.navigate ('Screen1' , {color:color})
    }

    render() {
        return(
            <View style = {styles.container}>
              <Header>
                  centerComponent = {{
                      text: 'On a scale from 1-5, how do you feel?',
                      style : {color : 'black', fontSize : 20 }
                  }}
              </Header>

              <TouchableOpacity
                style = {[styles.button,{backgroundColor:"red"}]}
                onPress={()=>this.goToScreen1("red")}> 
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>


            </View>

        )
    }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 50,
    width : 50,
    height: 15,
  buttonText: {
    textAlign: 'center',
    color: 'black'
  }
  }
})