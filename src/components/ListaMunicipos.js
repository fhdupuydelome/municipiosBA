import React from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import ItemMunicipio from './ItemMunicipio';

const ListaMunicipios = props => {
  const { municipios, onPressItem } = props;

  return (
    <View style={style.container}>
      <SafeAreaView>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={municipios}
          renderItem={
            ({ item }) => {
              return (
                <ItemMunicipio
                  municipio={item}
                  onPressDetails={onPressItem}
                />
              )
            }
          }
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
