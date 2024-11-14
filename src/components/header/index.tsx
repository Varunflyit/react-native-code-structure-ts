import {Text, TouchableOpacity, View} from 'react-native';

import FastImage from 'react-native-fast-image';
import {HeaderProps} from './types';
import React, {memo} from 'react';
import styles from './styles';

const Header = (props: HeaderProps) => {
  const {
    leftIcon,
    leftIconPress,
    leftIconStyle,
    LeftIconComp,
    leftIconColor,
    title,
    tilePress,
    titleStyle,
    rightIcon,
    rightIconPress,
    rightIconStyle,
    RightIconComp,
    rightStyle,
    customeContainerStyle,
    centerContainerStyle,
    leftViewStyle,
    CenterComp,
  } = props;

  return (
    <View style={[styles.container, customeContainerStyle]}>
      <View style={[styles.leftContainer, leftViewStyle]}>
        {leftIcon && (
          <TouchableOpacity
            onPress={leftIconPress}
            style={styles.iconContainer}>
            <FastImage
              source={leftIcon}
              tintColor={leftIconColor}
              style={[styles.leftIcon, leftIconStyle]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {LeftIconComp && <LeftIconComp />}
      </View>
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {title && (
          <TouchableOpacity onPress={tilePress} activeOpacity={1}>
            <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
          </TouchableOpacity>
        )}
        {CenterComp && <CenterComp />}
      </View>
      <View style={[styles.rightContainer, rightStyle]}>
        {rightIcon && (
          <TouchableOpacity
            onPress={rightIconPress}
            style={styles.iconContainer}>
            <FastImage
              source={rightIcon}
              style={[styles.rightIcon, rightIconStyle]}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        )}
        {RightIconComp && <RightIconComp />}
      </View>
    </View>
  );
};

export default memo(Header);
