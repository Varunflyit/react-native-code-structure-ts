/* eslint-disable react-native/no-inline-styles */
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';

import Button from '../button';
import {ConfirmationModalProps} from './types';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {AppImages} from '../../themes/appImages';
import Spacer from '../spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {appColors} from '../../themes/appColor';
import {fontName} from '../../themes/appFonts';

const ConfirmationModal = (props: ConfirmationModalProps) => {
  const {
    visible,
    backClose,
    onClose,
    onSubmit,
    topRightIconPress,
    title0,
    title,
    title1,
    subTitle,
    cancelText,
    okText,
    heading,
    customButtonStyle,
    customButtonTextStyle,
    customCrossStyle,
    topRightIcon,
    customWhiteContainerStyle,
    customTopRightIconStyle,
    customImageStyle,
    customTitleStyle,
    customHeadingStyle,
    customSubTitleStyle,
    logo,
  } = props;

  return (
    <Modal
      visible={visible}
      statusBarTranslucent={true}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={backClose}>
        <View style={styles.mainContainer}>
          <Spacer height={responsiveHeight(14)} />
          <View style={[styles.container, customWhiteContainerStyle]}>
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.7}
              style={styles.closeView}>
              <FastImage
                source={AppImages.close}
                style={styles.closeIcon}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <Spacer height={responsiveHeight(2)} />
            {logo && (
              <FastImage
                source={logo}
                style={[styles.image, customImageStyle]}
                resizeMode="stretch"
              />
            )}
            {heading && (
              <Text style={[styles.heading, customHeadingStyle]}>
                {heading}
              </Text>
            )}
            {title && (
              <Text
                adjustsFontSizeToFit
                numberOfLines={10}
                style={[styles.title, customTitleStyle]}>
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={10}
                  style={[
                    styles.title,
                    {color: appColors.greenDark, fontFamily: fontName.medium},
                  ]}>
                  {title0}
                </Text>
                {title}
                <Text
                  adjustsFontSizeToFit
                  numberOfLines={10}
                  style={[
                    styles.title,
                    {color: appColors.greenDark, fontFamily: fontName.medium},
                  ]}>
                  {title1}
                </Text>
              </Text>
            )}
            {subTitle && (
              <Text style={[styles.subTitle, customSubTitleStyle]}>
                {subTitle}
              </Text>
            )}
            <View style={styles.buttonContainer}>
              {cancelText && (
                <Button
                  onPress={onClose}
                  title={cancelText}
                  style={styles.button}
                  textStyle={styles.buttonText}
                />
              )}
              {okText && (
                <Button
                  onPress={onSubmit}
                  title={okText}
                  style={[styles.button, customButtonStyle]}
                  textStyle={[styles.buttonText, customButtonTextStyle]}
                />
              )}
            </View>
            <TouchableOpacity
              onPress={topRightIconPress}
              style={[styles.topRightContainer, customCrossStyle]}>
              <FastImage
                source={topRightIcon}
                style={[styles.image, customTopRightIconStyle]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default memo(ConfirmationModal);
