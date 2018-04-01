/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class instaclone extends Component {
  render() {

    const fotos = [{
      id: 1,
      usuario: 'rodolfo'
    }, 
    {
      id: 2,
      usuario: 'rafael'
    },
    {
      id: 3,
      usuario: 'alberto'
    }];

    return (
      <ScrollView style={{ marginTop: 20 }} >

        { fotos.map( foto => 
        
           <View key={ foto.id }>
               <Text> { foto.usuario } </Text> 
               <Image source = {
                   require('./resources/imagem/foto.jpg')
                 }
               style = {
                 {
                   width: width,
                   height: width
                 }
               }
               />
           </View>
           
         )}


      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('instaclone', () => instaclone);
