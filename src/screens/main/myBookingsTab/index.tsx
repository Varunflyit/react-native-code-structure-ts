import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import {AppImages} from '../../../themes/appImages';
import {TabView} from 'react-native-tab-view';
import TabContainer from './components/tabContainer';
import {goBack} from '../../../routes/navigationServices';
import UpcomingBookings from '../upcomingBookings';
import CompletedBookings from '../completedBookings';
import CancelledBookings from '../cancelledBookings';

const MyBookingsTab: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: 'UpcomingBookings',
    },
    {
      key: 'CompletedBookings',
    },
    {
      key: 'CancelledBookings',
    },
  ]);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'UpcomingBookings':
        return <UpcomingBookings />;
      case 'CompletedBookings':
        return <CompletedBookings />;
      case 'CancelledBookings':
        return <CancelledBookings />;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.myBookings}
      />
      <View style={styles.innerContainer}>
        <TabView
          lazy
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={props => (
            <TabContainer
              {...props}
              index={index}
              setIndex={(idx: any) => {
                setIndex(idx);
              }}
            />
          )}
          onIndexChange={(idx: any) => {
            setIndex(idx);
          }}
          swipeEnabled={true}
        />
      </View>
    </View>
  );
};

export default MyBookingsTab;
