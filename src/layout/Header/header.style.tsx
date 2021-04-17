import {Platform, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    borderBottomEndRadius: 10,
  },
  heading: {
    color: Colors.fontOne,
    fontSize: 24,
    fontFamily: Colors.fontLatoBold,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  banner: {
    width: '100%',
    height: 200,
  },
});
