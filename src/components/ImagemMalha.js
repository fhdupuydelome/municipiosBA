import React from 'react';
import { View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';

const ImagemMalha = ({ uri }) => {
  return (
    <View>
      <SvgCssUri
        uri={uri}
      />
    </View>
  )
}

export default ImagemMalha;