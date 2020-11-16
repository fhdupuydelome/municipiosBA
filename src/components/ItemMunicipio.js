import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ItemMunicipio = (props) => {

  const { municipio, onPressDetails, key } = props;

  console.log(municipio.id);

  return (
    <TouchableOpacity
      onPress={() => { onPressDetails(municipio.id) }}
    >
      <View style={style.line}>
        <Text
          style={style.linetext}
          key={municipio.nome}
        >{municipio.nome}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row'
  },
  linetext: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 7
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 10,
    borderRadius: 50
  }
}
)

export default ItemMunicipio;