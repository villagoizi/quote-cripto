import {NodePath} from '@babel/core';
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './header.style';

const Header: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bitcoin Quote</Text>

      <Image
        source={require('../../../assets/images/banner.jpeg')}
        style={styles.banner}
      />
    </View>
  );
};

export default Header;
