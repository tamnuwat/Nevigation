import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './stack/StackNavigation.js'
import DrawerNavigation from './drawer/DrawerNavigation'
import BottomNavigation from './bottom/BottomNavigation'
import TopNavigation from './top/TopNavigation'

export default class App extends React.Component {
  render()
  {
    return (
      <View style={{flex:1}}>

        {/*<DrawerNavigation/>*/}
        <TopNavigation/>


      </View>
    );
  }
}
