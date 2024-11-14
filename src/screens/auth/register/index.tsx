/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useRef, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
import FastImage from 'react-native-fast-image';
import {AppImages} from '../../../themes/appImages';
import {navigate} from '../../../routes/navigationServices';
import {userRegisterCheck} from '../../../utils/validator';
import {showToast} from '../../../helpers/showToast';
import {registerAction} from '../../../redux/actions/auth';
import {useDispatch} from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
  const inputRef: any = useRef<any>([]);

  const LeftComponent = () => {
    const leftComponent = useMemo(() => {
      return (
        <View>
          <View style={styles.lineStyle} />
          <Text style={styles.codeText}>+91</Text>
        </View>
      );
    }, []);

    return leftComponent;
  };

  const onSubmitPress = () => {
    const error = userRegisterCheck(
      name,
      number,
      email,
      password,
      confirmPassword,
      termsAndConditions,
    );
    if (error) {
      showToast('error', error);
      return;
    }
    dispatch(
      registerAction({
        name: name,
        mobile_number: number,
        email: email,
        password: password,
      }),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header title={AppStrings.register} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.innerContainer}>
        <Spacer height={responsiveHeight(2)} />
        <TextField
          inputRef={(ref: any) => (inputRef[0] = ref)}
          maxLength={40}
          value={name}
          onChangeText={(text: string) => {
            setName(text.trimStart());
          }}
          label={AppStrings.name}
          placeholder={AppStrings.enterYourName}
          ReturnKeyType={'next'}
          nextField={async () => {
            inputRef[1].focus();
          }}
        />
        <Spacer height={responsiveHeight(2)} />
        <TextField
          inputRef={(ref: any) => (inputRef[1] = ref)}
          keyboardType="number-pad"
          maxLength={10}
          label={AppStrings.mobileNumber}
          placeholder={'XXXXXXXXXX'}
          value={number}
          onChangeText={(text: string) => {
            setNumber(text.trimStart());
          }}
          LeftComp={LeftComponent}
          ReturnKeyType={'next'}
          nextField={async () => {
            inputRef[2].focus();
          }}
        />
        <Spacer height={responsiveHeight(2)} />
        <TextField
          inputRef={(ref: any) => (inputRef[2] = ref)}
          label={AppStrings.password}
          placeholder={AppStrings.enterPassword}
          value={password}
          maxLength={20}
          secureTextEntry={true}
          onChangeText={(text: string) => {
            setPassword(text.trimStart());
          }}
          ReturnKeyType={'next'}
          nextField={async () => {
            inputRef[3].focus();
          }}
        />
        <Spacer height={responsiveHeight(2)} />
        <TextField
          inputRef={(ref: any) => (inputRef[3] = ref)}
          label={AppStrings.confirmPassword}
          placeholder={AppStrings.reEnterYourPassword}
          value={confirmPassword}
          maxLength={20}
          secureTextEntry={true}
          onChangeText={(text: string) => {
            setConfirmPassword(text.trimStart());
          }}
          ReturnKeyType={'next'}
          nextField={async () => {
            inputRef[4].focus();
          }}
        />

        <Spacer height={responsiveHeight(2)} />
        <TextField
          inputRef={(ref: any) => (inputRef[4] = ref)}
          keyboardType="email-address"
          autoCapitalize={'none'}
          maxLength={60}
          label={AppStrings.email}
          placeholder={AppStrings.enterYourEmail}
          value={email}
          onChangeText={(text: string) => {
            setEmail(text.trimStart());
          }}
          ReturnKeyType={'done'}
        />

        <Spacer height={responsiveHeight(4)} />
        <View style={styles.termsView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setTermsAndConditions(!termsAndConditions);
            }}
            style={{paddingVertical: 4}}>
            <View style={styles.boxStyle}>
              {termsAndConditions && (
                <FastImage
                  resizeMode="contain"
                  style={styles.logoStyle}
                  source={AppImages.tick}
                />
              )}
            </View>
          </TouchableOpacity>
          <Text onPress={() => {}} style={styles.termsText}>
            {AppStrings.termsAndConditions}
          </Text>
          <Text
            style={{
              ...styles.termsText2,
              marginTop: 0,
              fontSize: 14,
              marginRight: 0,
            }}>
            {' and '}
          </Text>
          <Text onPress={() => {}} style={styles.termsText}>
            {AppStrings.privacyPolicy}
          </Text>
        </View>
        <Text style={styles.termsText2}>{AppStrings.bySelecting}</Text>
        <Spacer height={responsiveHeight(4)} />
        <Button
          onPress={onSubmitPress}
          title={AppStrings.signUp}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer height={responsiveHeight(2)} />
        <View style={styles.bottomView}>
          <Text style={styles.notHaveText}>{AppStrings.existingUser}</Text>
          <TouchableOpacity
            onPress={() => navigate(AppRoutes.login)}
            activeOpacity={0.7}
            style={styles.signUpView}>
            <Text style={styles.signUpText}>{AppStrings.login2}</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={responsiveHeight(5)} />
      </ScrollView>
    </View>
  );
};

export default Register;
