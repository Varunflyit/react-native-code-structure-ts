import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {appColors} from '../../../../../themes/appColor';

const ReferralCard = ({item}: any) => {
  return (
    <View style={styles.mainContainer}>
      <FastImage
        resizeMode="contain"
        style={styles.profile}
        source={item?.profile}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.nameText}>
          {item?.name}
        </Text>
        <Text style={styles.dateText}>{item?.date}</Text>
        <Text
          style={{
            ...styles.statusText,
            color: item?.isCompleted ? appColors.greenDark : appColors.red,
          }}>
          {item?.status}
        </Text>
      </View>
    </View>
  );
};

export default ReferralCard;
