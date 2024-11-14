import React, {useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
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
import FastImage from 'react-native-fast-image';
import Slider from '@react-native-community/slider';
import {appColors} from '../../../themes/appColor';
import SmileCard from './components/smileCard';
import ConfirmationModal from '../../../components/confirmationModal';

const RateUs: React.FC = () => {
  const [experience, setExperience] = useState<string>('');
  const [slideCompletionValue, setSlideCompletionValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [successModal, setSuccessModal] = useState(false);

  const SpacingComponents = (width: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer width={responsiveWidth(width)} />;
    }, [width]);

    return spacingComponent;
  };

  const data = [
    {
      id: 1,
      image: AppImages.worstSmile,
      name: 'Worst',
    },
    {
      id: 2,
      image: AppImages.notGoodSmile,
      name: 'Not Good',
    },
    {
      id: 3,
      image: AppImages.fineSmile,
      name: 'Fine',
    },
    {
      id: 4,
      image: AppImages.goodSmile,
      name: 'Look Good',
    },
    {
      id: 5,
      image: AppImages.loveItSmile,
      name: 'Very Good',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.rateUs?.toUpperCase()}
      />
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(1)} />
        <Text style={styles.notHaveText}>{AppStrings.shareYourExperience}</Text>
        <View
          style={{
            marginVertical: responsiveHeight(2),
          }}>
          <FlatList
            horizontal
            bounces={false}
            keyExtractor={(item: any) => item?.id.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => SpacingComponents(1.5)}
            data={data}
            renderItem={props => (
              <SmileCard
                {...props}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Slider
            step={1}
            minimumValue={0}
            maximumValue={100}
            style={styles.slider}
            value={slideCompletionValue}
            onSlidingComplete={value => {
              setSlideCompletionValue(value);
            }}
            thumbTintColor={appColors.blue}
            maximumTrackTintColor={appColors.greyBg}
            minimumTrackTintColor={appColors.blue}
          />
        </View>
        <Text style={styles.notHaveText}>{AppStrings.rateYourExperience}</Text>
        <View style={styles.topView}>
          <FastImage
            resizeMode="stretch"
            source={AppImages.starBlack}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.starBlack}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.starBlack}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.starBlack}
            style={styles.starStyle}
          />
          <FastImage
            resizeMode="stretch"
            source={AppImages.starBlack}
            style={styles.starStyle}
          />
        </View>
        <Spacer height={responsiveHeight(5)} />
        <Text style={styles.notHaveText}>{AppStrings.careToShare}</Text>
        <TextField
          maxLength={1000}
          multiline={true}
          placeholder={AppStrings.howWasYourOverall}
          value={experience}
          onChangeText={(text: string) => {
            setExperience(text.trimStart());
          }}
          inputStyle={styles.inputStyle}
          textContainerStyle={styles.textContainerStyle}
          containerStyle={styles.containerStyle}
          ReturnKeyType={'done'}
        />
        <Spacer flex={0.8} />
        <Button
          onPress={() => {
            setSuccessModal(true);
          }}
          title={AppStrings.submit}
          style={{width: responsiveWidth(70)}}
        />
        <Spacer flex={1} />
      </View>
      <ConfirmationModal
        visible={successModal}
        customImageStyle={{
          width: responsiveWidth(16),
          height: responsiveWidth(16),
        }}
        logo={AppImages.happy}
        heading={
          selectedIndex === 0 || selectedIndex === 1 ? 'Sorry' : 'Thank you!'
        }
        title={
          selectedIndex === 0 || selectedIndex === 1
            ? 'We sincerely apologize for the inconvenience and frustration you experienced.'
            : `For taking time out of your day to leave us this super kind review.`
        }
        onClose={() => {
          setSuccessModal(false);
        }}
        okText={AppStrings.okay}
        onSubmit={() => {
          setSuccessModal(false);
          navigate(AppRoutes.bottomTabRoutes);
        }}
      />
    </View>
  );
};

export default RateUs;
