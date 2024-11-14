/* eslint-disable react-native/no-inline-styles */
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';

import Button from '../button';
import {ConfirmationModalProps} from './types';
import styles from './styles';
import {appColors} from '../../themes/appColor';

const LogoutModal = (props: ConfirmationModalProps) => {
  const {
    visible,
    backClose,
    onClose,
    onSubmit,
    title,
    subTitle,
    cancelText,
    okText,
    customButtonStyle,
    customButtonTextStyle,
    customWhiteContainerStyle,
    customTitleStyle,
    customSubTitleStyle,
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
          <View style={[styles.container, customWhiteContainerStyle]}>
            {title && (
              <Text
                adjustsFontSizeToFit
                numberOfLines={10}
                style={[styles.title, customTitleStyle]}>
                {title}
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
                  textStyle={{...styles.buttonText, color: appColors.textBlack}}
                  innerStyle={{backgroundColor: appColors.greyBg}}
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
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default memo(LogoutModal);
