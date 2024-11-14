import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {appColors} from '../../../../../themes/appColor';
import Spacer from '../../../../../components/spacer';

const DateCard = (props: any) => {
  const {setSelectedIndex, selectedIndex, item, index} = props;

  return (
    <TouchableOpacity
      onPress={() => setSelectedIndex(index)}
      activeOpacity={0.7}
      style={{
        ...styles.mainContainer,
        backgroundColor:
          selectedIndex === index ? appColors.blue : appColors.white,
      }}>
      <Text
        style={{
          ...styles.carWashStyle,
          color: selectedIndex === index ? appColors.white : appColors.dateText,
        }}>
        {item?.day.split('')[0]}
      </Text>
      <Spacer height={10} />
      <Text
        style={{
          ...styles.dateText,
          color: selectedIndex === index ? appColors.white : appColors.black,
        }}>
        {item?.date.split('-')[2]}
      </Text>
    </TouchableOpacity>
  );
};

export default DateCard;
