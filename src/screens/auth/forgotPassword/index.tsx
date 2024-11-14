import React, {useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AppRoutes, AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import TextField from '../../../components/textField';
import Spacer from '../../../components/spacer';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../../../components/button';
import {AppImages} from '../../../themes/appImages';
import {goBack, navigate} from '../../../routes/navigationServices';
import {useDispatch} from 'react-redux';
import {validatePhone} from '../../../utils/validator';
import {showToast} from '../../../helpers/showToast';
import {ValidationConstants} from '../../../themes/validationConstants';
import {forgotPasswordAction} from '../../../redux/actions/auth';

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState<string>('');
  const onSubmitPress = () => {
    if (!validatePhone(number.trim())) {
      showToast('error', ValidationConstants.invalidPhoneNumber);
      return;
    }
    dispatch(
      forgotPasswordAction({
        mobile_number: number,
      }),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.forgotPassword}
      />
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(1)} />
        <TextField
          keyboardType="number-pad"
          maxLength={10}
          label={AppStrings.mobileNumber}
          placeholder={AppStrings.enterEmail2}
          value={number}
          onChangeText={(text: string) => {
            setNumber(text.trimStart());
          }}
          ReturnKeyType={'done'}
        />
        <Spacer flex={1} />
        <Button
          onPress={onSubmitPress}
          title={AppStrings.send}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer height={responsiveHeight(2)} />
        <View style={styles.bottomView}>
          <Text style={styles.notHaveText}>{AppStrings.rememberPassword}</Text>
          <TouchableOpacity
            onPress={() => navigate(AppRoutes.login)}
            activeOpacity={0.7}
            style={styles.signUpView}>
            <Text style={styles.signUpText}>{AppStrings.login2}</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={responsiveHeight(5)} />
      </View>
    </View>
  );
};

export default ForgotPassword;
