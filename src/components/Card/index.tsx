import React from 'react';
import {View, Text} from 'react-native';
import WrappedGradient from '../LinearGradient';
import {Response} from '../../App';
import Colors from '../../constants/Colors';
import styles from './card.style';

interface CardProps {
  quote?: Response;
  title: string;
}

const Card: React.FC<CardProps> = ({quote, title}) => {
  if (!quote) return null;
  const {
    HIGH24HOUR,
    HIGHDAY,
    LASTUPDATE,
    LOWDAY,
    OPENDAY,
    PRICE,
  } = quote as Response;
  return (
    <WrappedGradient
      style={styles.container}
      colors={[Colors.bgSecondary, Colors.bgPrimary]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.fields}>
        <Text style={styles.label}>Price: </Text>
        <Text style={styles.info}>{PRICE}</Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.label}>Low price day: </Text>
        <Text style={styles.info}>{LOWDAY}</Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.label}>High price day: </Text>
        <Text style={styles.info}>{HIGHDAY}</Text>
      </View>

      <View style={styles.fields}>
        <Text style={styles.label}>Last update: </Text>
        <Text style={styles.info}>{LASTUPDATE}</Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.label}>High last 24hs: </Text>
        <Text style={styles.info}>{HIGH24HOUR}</Text>
      </View>
      <View style={styles.fields}>
        <Text style={styles.label}>Open day: </Text>
        <Text style={styles.info}>{OPENDAY}</Text>
      </View>
    </WrappedGradient>
  );
};
export default Card;
