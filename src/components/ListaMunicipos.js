import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import ItemMunicipio from './ItemMunicipio';

const ListaMunicipios = props => {
  const { municipios, onPressItem } = props;

  const renderItem = ({ item }) => {
    return (
      <ItemMunicipio
        municipio={item}
        onPressDetails={onPressItem}
      />
    )
  }

  return (
    <View style={style.container}>
      <SafeAreaView>
        <FlatList
          data={municipios}
          renderItem={renderItem}
          keyExtractor={(item) => { item.id.toString() }}
        />
      </SafeAreaView>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#a3fb87'
  }
})


export default ListaMunicipios;
