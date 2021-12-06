import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import Screen1 from './screens/1Screen'
import Screen2 from './screens/2'
import Screen3 from './screens/3'
import Screen4 from './screens/4'
import Screen5 from './screens/5'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 




export default class App extends React.Component {
    render() {
        return (
            <View>
                <AppContainer/> 
            </View>
        )
    }
}



var AppNavigator = createSwitchNavigator ({
    HomeScreen: HomeScreen,
    Screen1: Screen1, 
    Screen2: Screen2, 
    Screen3: Screen3, 
    Screen4: Screen4, 
    Screen5: Screen5,
    
})

const AppContainer = createAppContainer(AppNavigator)

