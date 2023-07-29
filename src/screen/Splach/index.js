import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';

const Splach = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);
  return (
    <View style={style.constiner}>
      <Image
        style={style.logo}
        source={require('../../components/Images/logo.png')}
      />
    </View>
  );
};

const style = StyleSheet.create({
  constiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f6f2',
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});
export default Splach;
