import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import CompletedCard from './components/canceledCard';
import CanceledCard from './components/canceledCard';

const CanceledBookings: React.FC = () => {
  const data: any = [
    {
      id: 1,
      profile: AppImages.dummy,
      title: 'Regular Car Wash',
      dayAndDate: 'Sun, 1 June',
      vehicle: 'Kia Seltos',
      serviceBy: 'Ravi Kumar',
      extra: 'star',
    },
    {
      id: 2,
      profile: AppImages.dummy,
      title: 'Regular Car Wash',
      dayAndDate: 'Sun, 1 June',
      vehicle: 'Kia Seltos',
      serviceBy: 'Ravi Kumar',
      extra: 'button',
    },
    {
      id: 3,
      profile: AppImages.dummy,
      title: 'Regular Car Wash',
      dayAndDate: 'Sun, 1 June',
      vehicle: 'Kia Seltos',
      serviceBy: 'Ravi Kumar',
      extra: 'star',
    },
  ];

  const SpacingComponents = (height: number) => {
    const spacingComponent = useMemo(() => {
      return <Spacer height={responsiveHeight(height)} />;
    }, [height]);

    return spacingComponent;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Spacer height={responsiveHeight(1)} />
        <FlatList
          keyExtractor={(item: any) => item?.id.toString()}
          // ListEmptyComponent={EmptyComponent}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={props => <CanceledCard {...props} />}
          ItemSeparatorComponent={() => SpacingComponents(2)}
          ListFooterComponent={() => SpacingComponents(10)}
          ListHeaderComponent={() => SpacingComponents(2)}
          contentContainerStyle={styles.flatlistStyle}
        />
      </View>
    </View>
  );
};

export default CanceledBookings;
