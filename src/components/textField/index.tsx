import {
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {TextFieldProps} from './types';
import {styles} from './styles';
import {appColors} from '../../themes/appColor';

const TextField = (props: TextFieldProps | any) => {
  const {
    label,
    rightLabel,
    rightLabelStyle,
    rightLabelPress,
    nextField,
    enter,
    LeftComp,
    LeftCompProps,
    RightComp,
    RightCompProps,
    onTouchEnd,
    labelStyle,
    containerStyle,
    labelContainerStyle,
    multiline,
    inputStyle,
    inputRef,
    showCharLimit = false,
    charLimitStyle,
    textContainerStyle,
    autoFocus,
    ReturnKeyType,
    autoCapitalize,
    editable,
    maxLetters,
    search,
  } = props;

  return (
    <View>
      <View style={{...styles.labelContainer, ...labelContainerStyle}}>
        {label && (
          <Text style={{...styles.labelText, ...labelStyle}}>{label}</Text>
        )}
        {rightLabel && (
          <Text
            style={[styles.labelText, {...rightLabelStyle}]}
            suppressHighlighting={true}
            onPress={rightLabelPress}>
            {rightLabel}
          </Text>
        )}
      </View>
      <View style={{...styles.container, ...containerStyle}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onTouchEnd}
          style={{...styles.textContainer, ...textContainerStyle}}>
          {LeftComp && (
            <View style={styles.leftContainer}>
              <LeftComp {...LeftCompProps} />
            </View>
          )}
          <View style={styles.centerContainer}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={Platform.OS === 'android' ? onTouchEnd : null}>
              <TextInput
                maxLength={maxLetters}
                editable={editable}
                ref={inputRef}
                multiline={multiline}
                maxFontSizeMultiplier={1}
                placeholderTextColor={appColors.textFielplaceholderColor}
                selectionColor={appColors.blue}
                style={{...styles.input, ...inputStyle}}
                blurOnSubmit={false}
                autoCapitalize={autoCapitalize ?? 'sentences'}
                onSubmitEditing={() => {
                  if (
                    ReturnKeyType === 'next' ||
                    ReturnKeyType === 'done' ||
                    enter
                  ) {
                    ReturnKeyType === 'next'
                      ? nextField()
                      : ReturnKeyType === 'search'
                      ? search()
                      : Keyboard.dismiss();
                  }
                }}
                {...props}
                autoFocus={autoFocus}
                returnKeyType={ReturnKeyType}
              />
            </TouchableOpacity>
          </View>
          {RightComp && (
            <View style={styles.rightContainer}>
              <RightComp {...RightCompProps} />
            </View>
          )}
        </TouchableOpacity>
        {showCharLimit && (
          <Text style={{...styles.charLimitText, ...charLimitStyle}}>
            {props?.value?.length}/{props?.maxLength}
          </Text>
        )}
      </View>
    </View>
  );
};
export default TextField;
