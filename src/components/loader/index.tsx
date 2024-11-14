import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loaderAction} from '../../redux/actions/global';
import {appColors} from '../../themes/appColor';
import {RootState} from '../../redux/reducers';

const Loader = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state: RootState) => state.globalReducer);

  React.useEffect(() => {
    dispatch(loaderAction(false));
  }, [dispatch]);

  return (
    isLoading && (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={appColors.textPink} />
      </View>
    )
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000080',
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
