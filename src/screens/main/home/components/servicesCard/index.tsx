import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {navigate} from '../../../../../routes/navigationServices';
import {AppRoutes} from '../../../../../themes/appConstans';

const ServicesCard = (props: any) => {
  const {item} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(AppRoutes.services);
      }}
      activeOpacity={0.7}
      style={{
        ...styles.mainContainer,
      }}>
      <FastImage
        resizeMode="stretch"
        source={item?.image}
        style={styles.imageStyle}
      />
      <Text
        style={{
          ...styles.carWashStyle,
        }}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ServicesCard;
