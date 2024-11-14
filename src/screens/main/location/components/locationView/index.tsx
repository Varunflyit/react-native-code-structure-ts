import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const LocationView = (props: any) => {
  const {item} = props;
  return (
    <View
      style={{
        ...styles.mainContainer,
      }}>
      <Text style={styles.carWashStyle}>{item?.name}</Text>
    </View>
  );
};

export default LocationView;
