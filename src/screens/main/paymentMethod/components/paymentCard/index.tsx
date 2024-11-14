/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../../../themes/appColor';
import RadioBtn from '../../../../../components/radioBtn';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const PaymentCard = (props: any) => {
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
      <RadioBtn
        activeRadio={selectedIndex === index}
        onBtnPress={() => setSelectedIndex(index)}
      />
      <View style={{width: responsiveWidth(24), alignItems: 'center'}}>
        <FastImage
          resizeMode="stretch"
          source={item?.image}
          style={{
            width: index === 0 ? 28 : index === 3 ? 50 : 40,
            height: index === 0 ? 26 : index === 3 ? 50 : 40,
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            ...styles.carWashStyle,
            marginBottom: index === 0 ? 0 : 4,
          }}>
          {item?.name}
        </Text>
        {item?.type && (
          <Text
            style={{
              ...styles.numberStyle,
            }}>
            {item?.type}
          </Text>
        )}
      </View>
      {!item?.type && (
        <Text
          style={{
            ...styles.cashStyle,
          }}>
          {'₹650'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default PaymentCard;
