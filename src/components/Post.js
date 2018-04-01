import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component{
  render(){
    return(
        <View>
          
          <View style={styles.header}>

            <Image source={{ uri: this.props.foto.urlPerfil }}
            style={styles.profilePicture}
            />

            <Text> { this.props.foto.loginUsuario } </Text>

          </View>
          
          <Image source={{uri: this.props.foto.urlFoto}}
            style={styles.postPicture}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
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
});