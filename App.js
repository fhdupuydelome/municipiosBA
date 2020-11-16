import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaginaListaMunicipios from './src/pages/PaginaListaMunicipios';
import PaginaDetalheMunicipio from './src/pages/PaginaDetalheMunicipio';


const Stack = createStackNavigator();
function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer initialRouteName="PaginaListaMunicipios">
        <Stack.Navigator >
          <Stack.Screen name="Lista de Municipios" component={PaginaListaMunicipios} />
          <Stack.Screen name="Detalhes do Municipio" component={PaginaDetalheMunicipio} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef',
  },
});


export default App;