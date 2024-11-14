import React from 'react';
import {ImageBackground} from 'react-native';
import styles from './styles';
import Spacer from '../../../components/spacer';
import {AppImages} from '../../../themes/appImages';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import BottomCard from './components/bottomCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers';
import {replace} from '../../../routes/navigationServices';
import {AppRoutes} from '../../../themes/appConstans';

const GetStarted: React.FC = () => {
  const firstTimeAppOpened = useSelector(
    (state: RootState) => state.userReducer.firstTimeAppOpened,
  );
  React.useEffect(() => {
    if (!firstTimeAppOpened) {
      setTimeout(() => replace(AppRoutes.login), 400);
    }
  }, [firstTimeAppOpened]);
  return (
    <ImageBackground
      source={AppImages.getStartedBg}
      style={styles.mainContainer}>
      <Spacer flex={1} />
      <BottomCard />
      <Spacer height={responsiveHeight(10)} />
    </ImageBackground>
  );
};

export default GetStarted;
