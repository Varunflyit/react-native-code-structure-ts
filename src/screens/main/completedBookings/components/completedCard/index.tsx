/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import Spacer from '../../../../../components/spacer';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {appColors} from '../../../../../themes/appColor';
import {AppRoutes, AppStrings} from '../../../../../themes/appConstans';
import {AppImages} from '../../../../../themes/appImages';
import Button from '../../../../../components/button';
import {fontName} from '../../../../../themes/appFonts';
import {navigate} from '../../../../../routes/navigationServices';

const CompletedCard = ({item}: any) => {
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
          {item?.extra === 'star' ? (
            <View style={styles.topView1}>
              <FastImage
                resizeMode="stretch"
                source={AppImages.star}
                style={styles.starStyle}
              />
              <FastImage
                resizeMode="stretch"
                source={AppImages.star}
                style={styles.starStyle}
              />
              <FastImage
                resizeMode="stretch"
                source={AppImages.star}
                style={styles.starStyle}
              />
              <FastImage
                resizeMode="stretch"
                source={AppImages.star}
                style={styles.starStyle}
              />
              <FastImage
                resizeMode="stretch"
                source={AppImages.star}
                style={styles.starStyle}
              />
            </View>
          ) : (
            <Button
              onPress={() => {
                navigate(AppRoutes.rateUs);
              }}
              title={AppStrings.rateUs}
              style={styles.btnStyle}
              textStyle={{
                ...styles.textStyle,
                color: appColors.textBlack,
                fontFamily: fontName.regular,
              }}
              innerStyle={{backgroundColor: appColors.greyBg}}
            />
          )}
        </View>
        <FastImage
          resizeMode="cover"
          source={AppImages.tickCircle}
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

export default CompletedCard;
