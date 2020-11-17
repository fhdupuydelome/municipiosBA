import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ItemMunicipio = ({ municipio, onPressDetails }) => {



  //console.log(municipio.id);

  return (
    <TouchableOpacity
      onPress={() => { onPressDetails(municipio.id) }}
    >
      <View
        style={style.line}
        key={municipio.nome}
      >
        <Text
          style={style.linetext}

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