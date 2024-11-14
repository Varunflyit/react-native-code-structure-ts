import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../../../themes/appConstans';
import {appColors} from '../../../../../themes/appColor';
import Spacer from '../../../../../components/spacer';
import {fontSize} from '../../../../../themes/appFonts';

const TabContainer = (props: any) => {
  const {index, setIndex} = props;

  const getBgColor = (idx: number) => {
    if (index === idx) {
      return appColors.lightBlue;
    } else {
      return appColors.greyBg;
    }
  };
  const getColor = (idx: number) => {
    if (index === idx) {
      return appColors.blue;
    } else {
      return appColors.textFielplaceholderColor;
    }
  };
  const getFont = (idx: number) => {
    if (index === idx) {
      return fontSize.f15;
    } else {
      return fontSize.f13;
    }
  };
  const getLineHeight = (idx: number) => {
    if (index === idx) {
      return fontSize.f19;
    } else {
      return fontSize.f17;
    }
  };

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}>
        <TouchableOpacity
          onPress={() => {
            setIndex(0);
          }}
          activeOpacity={0.7}
          style={{...styles.touchStyle, backgroundColor: getBgColor(0)}}>
          <Text
            style={{
              ...styles.titleText,
              color: getColor(0),
              fontSize: getFont(0),
              lineHeight: getLineHeight(0),
            }}>
            {AppStrings.upcoming}
          </Text>
        </TouchableOpacity>
        <Spacer width={8} />
        <TouchableOpacity
          onPress={() => {
            setIndex(1);
          }}
          activeOpacity={0.7}
          style={{...styles.touchStyle, backgroundColor: getBgColor(1)}}>
          <Text
            style={{
              ...styles.titleText,
              color: getColor(1),
              fontSize: getFont(1),
              lineHeight: getLineHeight(1),
            }}>
            {AppStrings.completed}
          </Text>
        </TouchableOpacity>
        <Spacer width={8} />
        <TouchableOpacity
          onPress={() => {
            setIndex(2);
          }}
          activeOpacity={0.7}
          style={{...styles.touchStyle, backgroundColor: getBgColor(2)}}>
          <Text
            style={{
              ...styles.titleText,
              color: getColor(2),
              fontSize: getFont(2),
              lineHeight: getLineHeight(2),
            }}>
            {AppStrings.canceled}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TabContainer;
