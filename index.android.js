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
  FlatList,
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


      <FlatList
        style={styles.container}
        keyExtractor={ item => String(item.id) }
        data={ fotos }
        renderItem={ ({ item } ) =>
           <View>
              
              <View style={styles.header}>

                <Image source={
                    require('./resources/imagem/foto.jpg')
                  }
                style={styles.profilePicture}
                />

                <Text> { item.usuario } </Text>

              </View>
              
              <Image source={
                   require('./resources/imagem/foto.jpg')
                 }
               style={styles.postPicture}
               />
           </View>


       }
      /> 
    );
  }
}


const styles = StyleSheet.create({
  container:{
    marginTop: 10
  },
  header: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePicture: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  postPicture: {
    width: width,
    height: width
  }
})

AppRegistry.registerComponent('instaclone', () => instaclone);
