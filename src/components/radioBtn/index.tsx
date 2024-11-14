import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {RadioBtnProps} from './types';
import {appColors} from '../../themes/appColor';

const RadioBtn = (props: RadioBtnProps) => {
  const {
    onBtnPress,
    activeRadio,
    customOuterStyle,
    radioBorderStyle,
    disabledColor,
    disabled,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => !disabled && onBtnPress()}
      activeOpacity={!disabled ? 0.7 : 1}
      style={[styles.outerView, customOuterStyle]}>
      <View
        style={[
          styles.radioBorder,
          {
            borderColor: activeRadio
              ? appColors.lightBlue
              : disabledColor
              ? disabledColor
              : appColors.borderColor,
          },
          radioBorderStyle,
        ]}>
        {activeRadio && <View style={styles.radioDot} />}
      </View>
    </TouchableOpacity>
  );
};
export default RadioBtn;
