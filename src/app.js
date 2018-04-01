import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  AppRegistry
} from 'react-native';

import Post from './components/Post';


class instaclone extends Component {
  
  constructor(){
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then( response => response.json() )
      .then( json => this.setState({ fotos: json }))
  }
  
  render() {

    return (


      <FlatList
        style={styles.container}
        keyExtractor={ item => String(item.id) }
        data={ this.state.fotos }
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