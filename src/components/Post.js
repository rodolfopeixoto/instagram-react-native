import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component{

  constructor(props){
    super(props);
    this.state = {
      foto: this.props.foto
    }
  }


  loadingIcon(likeada){
    return likeada ? require('../../resources/imagem/likehouver.png') : require('../../resources/imagem/like.png')
  }

  like(){
    const updatePicture = {
      ...this.state.foto,
      likeada: !this.state.foto.likeada
    }
    this.setState({ foto: updatePicture })
  }

  render(){

    const { foto } = this.state;

    return(
        <View>
          
          <View style={styles.header}>

            <Image source={{ uri: foto.urlPerfil }}
            style={styles.profilePicture}
            />

            <Text> { foto.loginUsuario } </Text>

          </View>
          
          <Image source={{uri: foto.urlFoto}}
            style={styles.postPicture}
            />


           <View
             style={styles.footer}
             >
             <TouchableOpacity
               onPress={ this.like.bind(this) }
               >
                <Image 
                style={ styles.like }
              source={ this.loadingIcon(foto.likeada) } 
                />
              </TouchableOpacity>
            </View>


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
  },
  like: {
    height: 50,
    width: 50
  },
  footer: {
    margin: 10
  }
});