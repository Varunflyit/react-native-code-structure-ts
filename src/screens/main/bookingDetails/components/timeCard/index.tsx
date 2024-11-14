import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {appColors} from '../../../../../themes/appColor';
import Spacer from '../../../../../components/spacer';

const TimeCard = (props: any) => {
  const {setSelectedIndex, selectedIndex, item, index} = props;

  return (
    <View>
      <TouchableOpacity
        onPress={() => setSelectedIndex(index)}
        activeOpacity={0.7}
        style={{
          ...styles.mainContainer,
          borderColor:
            selectedIndex === index ? appColors.blue : appColors.greyLight,
          backgroundColor:
            selectedIndex === index ? appColors.blue : appColors.white,
        }}>
        <Text
          style={{
            ...styles.carWashStyle,
            color:
              selectedIndex === index ? appColors.white : appColors.textBlack,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
      <Spacer height={16} />
      <TouchableOpacity
        onPress={() => setSelectedIndex(index)}
        activeOpacity={0.7}
        style={{
          ...styles.mainContainer,
          borderColor:
            selectedIndex === index ? appColors.blue : appColors.greyLight,
          backgroundColor:
            selectedIndex === index ? appColors.blue : appColors.white,
        }}>
        <Text
          style={{
            ...styles.carWashStyle,
            color:
              selectedIndex === index ? appColors.white : appColors.textBlack,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeCard;
