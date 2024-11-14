import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

import React, {memo} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from '../../themes/appColor';
import {buttonProps} from './types';

const Button = (props: buttonProps) => {
  const {
    onPress,
    disabled,
    title,
    style,
    textStyle,
    loading,
    indicatorColor,
    noGradient,
    innerStyle,
  } = props;

  return (
    <LinearGradient
      useAngle={true}
      angle={155}
      colors={
        noGradient
          ? [appColors.transparent, appColors.transparent]
          : [appColors.blue, appColors.green]
      }
      style={
        disabled
          ? [styles.disabledInnerContainer, style]
          : [styles.innerContainer, style]
      }>
      <View style={[styles.innerView, innerStyle]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableView}
          onPress={onPress}
          disabled={loading || disabled}>
          {loading ? (
            <ActivityIndicator
              size={'small'}
              color={indicatorColor ? indicatorColor : appColors.white}
            />
          ) : (
            <Text
              style={
                disabled
                  ? [styles.disbaledTextStyle, textStyle]
                  : [styles.textStyle, textStyle]
              }>
              {title}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default memo(Button);
