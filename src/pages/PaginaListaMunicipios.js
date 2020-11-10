import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ListaMunicipios from '../components/ListaMunicipos';

export default class PaginaListaMunicipios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      municipios: []
    }
  }

  componentDidMount() {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/29/municipios')
      .then(response => {
        const municipiosLista = response.data;
        //console.log(municipiosLista);
        this.setState(
          { municipios: municipiosLista }
        )        
      })
  }

  render() {
    return (
      <View>
        <ListaMunicipios municipios={this.state.municipios} />
      </View>
    )
  }
}