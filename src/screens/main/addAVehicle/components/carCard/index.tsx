import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../../../themes/appColor';

const CarCard = (props: any) => {
  const {setSelectedIndex, selectedIndex, item, index} = props;
  console.log('ttt', item);
  return (
    <TouchableOpacity
      onPress={() => setSelectedIndex(index)}
      activeOpacity={0.7}
      style={{
        ...styles.mainContainer,
        backgroundColor:
          selectedIndex === index ? appColors.blue : appColors.greyBg,
      }}>
      <FastImage
        resizeMode="stretch"
        tintColor={
          selectedIndex === index
            ? appColors.white
            : appColors.textFielplaceholderColor
        }
        source={item?.image}
        style={styles.imageStyle}
      />
      <Text
        style={{
          ...styles.carWashStyle,
          color:
            selectedIndex === index
              ? appColors.white
              : appColors.textFielplaceholderColor,
        }}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CarCard;
