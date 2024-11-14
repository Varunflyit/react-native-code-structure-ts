/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {appColors} from '../../../../../themes/appColor';

const ReasonCard = (props: any) => {
  const {setSelectedIndex, selectedIndex, item, index} = props;
  return (
    <TouchableOpacity
      onPress={() => setSelectedIndex(index)}
      activeOpacity={0.7}
      style={{
        ...styles.mainContainer,
        borderBottomWidth: index === 3 ? 0 : 0.2,
      }}>
      <View
        style={{
          ...styles.radioView,
          backgroundColor:
            selectedIndex === index ? appColors.lightBlue2 : appColors.white,
          marginBottom: index === 0 ? 20 : 0,
        }}
      />
      <Text style={styles.carWashStyle}>{item?.description}</Text>
    </TouchableOpacity>
  );
};

export default ReasonCard;
