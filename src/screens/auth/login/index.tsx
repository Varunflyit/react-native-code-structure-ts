import React, {useRef, useState} from 'react';
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
import {navigate} from '../../../routes/navigationServices';
import FastImage from 'react-native-fast-image';
import {AppImages} from '../../../themes/appImages';
import {useDispatch} from 'react-redux';
import {loginCheck} from '../../../utils/validator';
import {showToast} from '../../../helpers/showToast';
import {loginAction} from '../../../redux/actions/auth';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const inputRef: any = useRef<any>([]);
  const onSubmitPress = () => {
    const error = loginCheck(mobileNumber, password);
    if (error) {
      showToast('error', error);
      return;
    }
    dispatch(
      loginAction({
        mobile_number: mobileNumber,
        password: password,
      }),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={AppStrings.login2} />
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(2)} />
        <TextField
          inputRef={(ref: any) => (inputRef[0] = ref)}
          label={AppStrings.mobileNumber}
          placeholder={AppStrings.enterYourNumber}
          value={mobileNumber}
          onChangeText={(text: string) => {
            setMobileNumber(text.trimStart());
          }}
          keyboardType="number-pad"
          autoCapitalize={'none'}
          ReturnKeyType={'next'}
          nextField={async () => {
            inputRef[1].focus();
          }}
          maxLength={10}
        />
        <Spacer height={responsiveHeight(2)} />
        <TextField
          inputRef={(ref: any) => (inputRef[1] = ref)}
          label={AppStrings.password}
          placeholder={AppStrings.enterPassword}
          value={password}
          maxLength={20}
          secureTextEntry={true}
          onChangeText={(text: string) => {
            setPassword(text.trimStart());
          }}
          ReturnKeyType={'done'}
        />
        <TouchableOpacity
          onPress={() => navigate(AppRoutes.forgotPassword)}
          activeOpacity={0.7}
          style={styles.forgotView}>
          <Text style={styles.forgotText}>{AppStrings.forgotPassword}</Text>
        </TouchableOpacity>
        <Spacer height={responsiveHeight(5)} />
        <Text style={styles.socialTextStyle}>
          {AppStrings.orContinueWithSocial}
        </Text>
        <Spacer height={responsiveHeight(2)} />
        <View style={styles.socialView}>
          <TouchableOpacity activeOpacity={0.7}>
            <FastImage
              source={AppImages.googleIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/* <Spacer width={responsiveWidth(6)} />
          <TouchableOpacity activeOpacity={0.7}>
            <FastImage
              source={AppImages.appleIcon}
              style={styles.appleIcon}
              resizeMode="contain"
            />
          </TouchableOpacity> */}
        </View>
        <Spacer flex={1} />
        <Button
          onPress={onSubmitPress}
          title={AppStrings.login2}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer height={responsiveHeight(2)} />
        <View style={styles.bottomView}>
          <Text style={styles.notHaveText}>{AppStrings.dontHaveAccount}</Text>
          <TouchableOpacity
            onPress={() => navigate(AppRoutes.register)}
            activeOpacity={0.7}
            style={styles.signUpView}>
            <Text style={styles.signUpText}>{AppStrings.signUp}</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={responsiveHeight(5)} />
      </View>
    </View>
  );
};

export default Login;
