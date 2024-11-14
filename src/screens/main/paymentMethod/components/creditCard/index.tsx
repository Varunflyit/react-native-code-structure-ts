/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../../../themes/appColor';
import {AppImages} from '../../../../../themes/appImages';

const CreditCard = (props: any) => {
  const {setSelectedIndex, selectedIndex, item, index} = props;
  return (
    <TouchableOpacity
      onPress={() => setSelectedIndex(index)}
      activeOpacity={0.7}
      style={{
        ...styles.mainContainer,
        backgroundColor:
          selectedIndex === index ? appColors.lightBlue : appColors.white,
        borderColor:
          selectedIndex === index ? appColors.white : appColors.borderColor,
      }}>
      <View style={{flex: 1}}>
        <Text
          style={{
            ...styles.carWashStyle,
          }}>
          {item?.name}
        </Text>
        <Text
          style={{
            ...styles.numberStyle,
          }}>
          {item?.number}
        </Text>
      </View>
      {selectedIndex === index && (
        <FastImage
          resizeMode="stretch"
          tintColor={appColors.blue}
          source={AppImages.tick}
          style={styles.imageStyle}
        />
      )}
    </TouchableOpacity>
  );
};

export default CreditCard;
