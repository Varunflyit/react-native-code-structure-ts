import React from 'react';
import {Keyboard, Text, View} from 'react-native';
import styles from './styles';
import {OtpInputViewProps} from '../../types/types';
import {OtpInput} from 'react-native-otp-entry';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Spacer from '../../../../../components/spacer';

const OtpInputView = (props: OtpInputViewProps) => {
  const {otp, setOtp} = props;

  return (
    <View style={styles.subContainer}>
      <Text
        style={styles.otpText}>{`OTP code sent to ${props.mobileNumber}`}</Text>
      <Spacer height={responsiveHeight(1.5)} />
      <Text style={styles.timerText}>{''}</Text>
      <Spacer height={responsiveHeight(3)} />
      <OtpInput
        numberOfDigits={6}
        onTextChange={(code: string) => {
          setOtp(code);
        }}
        onFilled={() => Keyboard.dismiss()}
        theme={{
          pinCodeContainerStyle: styles.codeInputStyle,
          pinCodeTextStyle: styles.codeInputFieldStyle,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.codeInputHighlightStyle,
        }}
      />
    </View>
  );
};

export default OtpInputView;
