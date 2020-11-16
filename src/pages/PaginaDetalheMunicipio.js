import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ImagemMalha from '../components/ImagemMalha';
import axios from 'axios';


export default class PaginaDetalheMunicipio extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ "id": props.route.params.municipio}

  }

  render() {
    return (
      <View style={styles.container}>
        <ImagemMalha style={styles.imagem} uri={`http://servicodados.ibge.gov.br/api/v2/malhas/${this.state.id}`} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center"
  },
  imagem: {
    height: "100%",
    width: "100%"
  }
})