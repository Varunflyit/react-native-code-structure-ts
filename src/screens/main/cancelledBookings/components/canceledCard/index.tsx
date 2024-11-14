/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import Spacer from '../../../../../components/spacer';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {appColors} from '../../../../../themes/appColor';
import {AppStrings} from '../../../../../themes/appConstans';
import {AppImages} from '../../../../../themes/appImages';

const CanceledCard = ({item}: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <FastImage
          resizeMode="cover"
          source={item?.profile}
          style={styles.profileImage}
        />
        <View
          style={{
            flex: 1,
            paddingStart: 12,
          }}>
          <Text style={styles.carWashStyle}>{item?.title}</Text>
        </View>
        <FastImage
          resizeMode="cover"
          source={AppImages.canceled}
          style={styles.tickCircle}
        />
      </View>
      <Spacer
        height={0.5}
        width={responsiveWidth(100)}
        background={appColors.textFielplaceholderColor}
      />
      <View style={styles.middleView}>
        <View style={styles.rowView}>
          <Text style={styles.titleStyle}>{AppStrings.serviceBy}</Text>
          <Text style={styles.descStyle}>{item?.serviceBy}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.titleStyle}>{AppStrings.vehicle}</Text>
          <Text style={styles.descStyle}>{item?.vehicle}</Text>
        </View>
        <View style={{...styles.rowView, flex: 0.8}}>
          <Text style={styles.titleStyle}>{AppStrings.dayDate}</Text>
          <Text numberOfLines={3} style={styles.descStyle}>
            {item?.dayAndDate}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CanceledCard;
