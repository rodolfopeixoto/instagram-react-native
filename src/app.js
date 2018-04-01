import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  AppRegistry
} from 'react-native';

import Post from './components/Post';


class instaclone extends Component {
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

        <Post foto={item} />
      
       }
      /> 
    );
  }
}


const styles = StyleSheet.create({
  container:{
    marginTop: 10
  }
});

export default () => {
  AppRegistry.registerComponent('instaclone', () => instaclone);
}