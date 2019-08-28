import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import StackNavigation from './stack/StackNavigation'
//import SwitchNavigation from './switch/SwitchNavigation'
import DrawerNavigation from './drawer/DrawerNavigation'
import ButtomNavigation from './Buttom/ButtomNavigation'
import TopNavigation from './Top/TopNavigation'
import MultipleNavigation from './multi/MultipleNavigation'
import SwitchNavigation from './homework/SwitchNavigation'

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:20}}>
          <SwitchNavigation/>
        </View>
    );
  }
}
