import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {AppStrings} from '../../../themes/appConstans';
import Header from '../../../components/header';
import Spacer from '../../../components/spacer';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {AppImages} from '../../../themes/appImages';
import {goBack} from '../../../routes/navigationServices';
import ServiceCard from './components/serviceCard';

const Services: React.FC = () => {
  const data = [
    {
      id: 1,
      image: AppImages.dummy,
      reviews: '(130 Reviews)',
      description: 'Hybrid Ceramic & Interior with Underbody',
      originalPrice: '₹600',
      discountedPrice: '₹450',
    },
    {
      id: 2,
      image: AppImages.dummy,
      reviews: '(130 Reviews)',
      description: 'Hybrid Ceramic & Interior with Underbody',
      originalPrice: '₹600',
      discountedPrice: '₹450',
    },
    {
      id: 3,
      image: AppImages.dummy,
      reviews: '(130 Reviews)',
      description: 'Hybrid Ceramic & Interior with Underbody',
      originalPrice: '₹600',
      discountedPrice: '₹450',
    },
    {
      id: 4,
      image: AppImages.dummy,
      reviews: '(130 Reviews)',
      description: 'Hybrid Ceramic & Interior with Underbody',
      originalPrice: '₹600',
      discountedPrice: '₹450',
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
      <Header
        leftIconPress={() => goBack()}
        leftIcon={AppImages.backBtn}
        title={AppStrings.pressureCarWash.toUpperCase()}
      />
      <View style={styles.innerContainer}>
        <FlatList
          keyExtractor={(item: any) => item?.id.toString()}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={props => <ServiceCard {...props} />}
          ItemSeparatorComponent={() => SpacingComponents(3)}
          ListFooterComponent={() => SpacingComponents(8)}
          ListHeaderComponent={() => SpacingComponents(1)}
          contentContainerStyle={styles.flatlistStyle}
        />
      </View>
    </View>
  );
};

export default Services;
