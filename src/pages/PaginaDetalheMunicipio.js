import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ImagemMalha from '../components/ImagemMalha';
import axios from 'axios';


export default class PaginaDetalheMunicipio extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { "id": props.route.params.municipio }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Teste</Text>
        <ImagemMalha          
          uri={`http://servicodados.ibge.gov.br/api/v2/malhas/${this.props.route.params.municipio}`}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    textAlign: "center", 
    backgroundColor: '#a3fb87'
  },
  imagem: {
    height: "100%",
    width: "100%"
  }
})