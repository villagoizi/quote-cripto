import React from 'react';
import {ScrollView, Text} from 'react-native';
import WrappedLinearGradient from '../components/LinearGradient';
import Colors from '../constants/Colors';
import Header from './Header';
import styles from './layout.style';

const Layout: React.FC<{}> = ({children}) => {
  return (
    <WrappedLinearGradient
      style={styles.container}
      colors={[Colors.bgPrimary, Colors.bgSecondary]}>
      <ScrollView style={styles.container}>
        <Header />
        {children}
      </ScrollView>
    </WrappedLinearGradient>
  );
};

export default Layout;
