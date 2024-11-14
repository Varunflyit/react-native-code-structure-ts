import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../../../components/button';
import {AppImages} from '../../../themes/appImages';
import OtpInputView from './components/otpInputView';
import {goBack} from '../../../routes/navigationServices';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {ValidationConstants} from '../../../themes/validationConstants';
import {showToast} from '../../../helpers/showToast';
import {
  forgotPasswordAction,
  forgotPasswordOtpVerifyAction,
} from '../../../redux/actions/auth';

const ForgotPasswordOTP: React.FC = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {mobile_number} = route.params;
  const [otp, setOtp] = useState<string>('');

  const onSubmitPress = () => {
    if (otp.length < 6) {
      showToast('error', ValidationConstants.validOtp);
      return;
    }
    dispatch(
      forgotPasswordOtpVerifyAction({
        mobile_number,
        otp,
      }),
    );
  };

  const onResendPress = () => {
    dispatch(
      forgotPasswordAction({
        mobile_number,
        isResend: true,
      }),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.otpVerification}
      />
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(0.5)} />
        <OtpInputView otp={otp} setOtp={setOtp} mobileNumber={mobile_number} />
        <Spacer height={responsiveHeight(1.5)} />
        <View style={styles.bottomView}>
          <Text style={styles.notHaveText}>{AppStrings.notReceivedOTP}</Text>
          <TouchableOpacity
            onPress={onResendPress}
            activeOpacity={0.7}
            style={styles.signUpView}>
            <Text style={styles.signUpText}>{AppStrings.resend}</Text>
          </TouchableOpacity>
        </View>
        <Spacer flex={1} />
        <Button
          onPress={onSubmitPress}
          title={AppStrings.submit}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer height={responsiveHeight(5)} />
      </View>
    </View>
  );
};

export default ForgotPasswordOTP;