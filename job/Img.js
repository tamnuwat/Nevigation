import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity,Image } from 'react-native';

export default class Img extends React.Component {


  onPressNext()
  {
    this.props.navigation.navigate('Temporary1Screen')
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >
        <Image
          style={{marginTop:10, width:200,height:200}}
          source={{uri:'https://www.img.in.th/images/6f7190ca33ca92bfbabc3987930e69c3.jpg'}}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
   btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },
  txt:{
      textAlign: 'center',
      fontSize:50
  },

})
