import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colorIcon} from '../styles/globalStyles';

const Loading = () => {
  return (
    <View
      style={{
        marginBottom: 15,
      }}>
      <ActivityIndicator size={42} color={colorIcon} />
    </View>
  );
};

export default Loading;
