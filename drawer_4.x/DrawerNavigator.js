import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'




const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
  title: 'Page1',}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
  title: 'Page2'}},
});



const navigator = createDrawerNavigator({
    drawerPage1:{screen:stackPage1},
    drawerPage2:{screen:stackPage2},

  });

export default createAppContainer(navigator);
