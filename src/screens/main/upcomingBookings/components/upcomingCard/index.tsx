/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import Spacer from '../../../../../components/spacer';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {appColors} from '../../../../../themes/appColor';
import {AppRoutes, AppStrings} from '../../../../../themes/appConstans';
import Button from '../../../../../components/button';
import {fontName} from '../../../../../themes/appFonts';
import {navigate} from '../../../../../routes/navigationServices';

const UpcomingCard = ({item, setSuccessModal}: any) => {
  console.log('setSuccessModal', setSuccessModal);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <FastImage
          resizeMode="cover"
          source={item?.profile}
          style={styles.profileImage}
        />
        <Text style={styles.carWashStyle}>{item?.title}</Text>
      </View>
      <Spacer
        height={0.5}
        width={responsiveWidth(100)}
        background={appColors.textFielplaceholderColor}
      />
      <View style={styles.middleView}>
        <View style={styles.rowView}>
          <Text style={styles.titleStyle}>{AppStrings.dayDate}</Text>
          <Text style={styles.descStyle}>{item?.dayAndDate}</Text>
        </View>
        <View style={{...styles.rowView, flex: 0.6}}>
          <Text style={styles.titleStyle}>{AppStrings.timing}</Text>
          <Text style={styles.descStyle}>{item?.timing}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.titleStyle}>{AppStrings.servicePerson}</Text>
          <Text numberOfLines={3} style={styles.descStyle}>
            {item?.servicePerson}
          </Text>
        </View>
      </View>
      <View style={styles.btnView}>
        <Button
          onPress={() => setSuccessModal(true)}
          title={AppStrings.cancelBooking}
          style={styles.btnStyle}
          textStyle={{
            ...styles.textStyle,
            color: appColors.textBlack,
            fontFamily: fontName.regular,
          }}
          innerStyle={{backgroundColor: appColors.greyBg}}
        />
        <Button
          onPress={() => {
            navigate(AppRoutes.reschedule);
          }}
          title={AppStrings.reschedule}
          style={styles.btnStyle}
          textStyle={styles.textStyle}
        />
      </View>
      <View style={[styles.rowView, styles.bottomRow]}>
        <Text style={styles.titleStyle}>{AppStrings.shareThisOtp}</Text>
        <Text style={styles.descStyle}>{item?.otp}</Text>
      </View>
    </View>
  );
};

export default UpcomingCard;
